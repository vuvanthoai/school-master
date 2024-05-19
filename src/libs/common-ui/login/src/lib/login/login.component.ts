import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginFormProperties } from './model/login.model';
import { AuthenticationService } from '@school-master/services';
import { WindowRef } from '@school-master/utilities/service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {
  CookieKey,
  NAVIGATION_URL_VALUES,
} from '@school-master/utilities/constants';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private windowRef = inject(WindowRef);
  private cookieService = inject(CookieService);
  private authenticationService = inject(AuthenticationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  loginForm: FormGroup = new FormGroup({});
  loading = false;
  loginErrorMessage?: string;
  readonly LoginFormProperties = LoginFormProperties;
  readonly NAVIGATION_URL_VALUES = NAVIGATION_URL_VALUES;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      [LoginFormProperties.EMAIL]: [
        '',
        [Validators.required, Validators.email],
      ],
      [LoginFormProperties.PASSWORD]: ['', [Validators.required]],
    });
  }

  handleLogin() {
    this.loading = true;
    this.authenticationService
      .login({ ...this.loginForm.value })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe({
        next: (data) => {
          this.cookieService.set(
            CookieKey.AccessToken,
            data.accessToken,
            365,
            '/',
            this.windowRef.nativeWindow.location.hostname,
            true,
            'Lax'
          );
          void this.router.navigate(['/']);
        },
        error: (err) => {
          this.loginErrorMessage = err.error?.message;
        },
      });
  }

  getControl<T>(controlName: LoginFormProperties): AbstractControl {
    return <AbstractControl<T, T>>this.loginForm.get(controlName);
  }

  navigateToUrl(url: NAVIGATION_URL_VALUES) {
    void this.router.navigate([`/${url}`]);
  }
}
