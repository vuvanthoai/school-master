import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  RegistrationFormProperties,
  RegistrationFormValue,
} from './model/registrationFormProperies';
import { AuthenticationService } from '@school-master/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { NotificationService } from '@school-master/utilities/service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private authenticationService = inject(AuthenticationService);
  private notificationService = inject(NotificationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  registrationForm: FormGroup = new FormGroup({});

  loading = false;

  RegistrationFormProperties = RegistrationFormProperties;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.registrationForm = this.formBuilder.group({
      [RegistrationFormProperties.FIRST_NAME]: ['', [Validators.required]],
      [RegistrationFormProperties.LAST_NAME]: ['', [Validators.required]],
      [RegistrationFormProperties.EMAIL]: ['', [Validators.required]],
      [RegistrationFormProperties.PASSWORD]: ['', [Validators.required]],
      [RegistrationFormProperties.RE_PASSWORD]: ['', [Validators.required]],
      [RegistrationFormProperties.POST_CODE]: [''],
      [RegistrationFormProperties.PHONE_NUMBER]: [''],
    });
  }

  handleSignUp() {
    const formData =
      this.registrationForm.getRawValue() as RegistrationFormValue;
    this.loading = true;
    this.authenticationService
      .signup({
        firstName: formData[RegistrationFormProperties.FIRST_NAME],
        lastName: formData[RegistrationFormProperties.LAST_NAME],
        password: formData[RegistrationFormProperties.PASSWORD],
        passwordConfirm: formData[RegistrationFormProperties.RE_PASSWORD],
      })
      .pipe(
        finalize(() => {
          this.loading = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.notificationService.setNotification({
            message: 'Registration successfully created',
          });
        },
        error: (err) => {
          this.notificationService.setNotification({
            modifier: 'danger',
            message: err.message,
          });
        },
      });
  }
}
