import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVIGATION_URL_VALUES } from '@school-master/utilities/constants';
import { Router, RouterLink } from '@angular/router';
import {
  AuthService,
  NotificationService,
  WindowRef,
} from '@school-master/utilities/service';
import { AuthenticationService } from '@school-master/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private cookieService = inject(CookieService);
  private windowRef = inject(WindowRef);
  private authenticationService = inject(AuthenticationService);
  private notificationService = inject(NotificationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  activeUser$ = this.authService.getActiveUser$();

  openToggleSearch = false;
  searchForm: FormGroup = new FormGroup({});

  readonly NAVIGATION_URL_VALUES = NAVIGATION_URL_VALUES;

  constructor(private router: Router) {
    this.searchForm = this.formBuilder.group({
      searchKey: [''],
      postCode: [''],
    });
  }

  handleNavigation(url: NAVIGATION_URL_VALUES) {
    void this.router.navigate([url]);
  }

  logout() {
    this.authenticationService
      .logout()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.authService.setActiveUser$(undefined);
          this.cookieService.deleteAll(
            '/',
            this.windowRef.nativeWindow.location.hostname,
            true,
            'Lax'
          );
          void this.router.navigate(['/']);
        },
        error: () => {
          this.notificationService.setNotification({
            modifier: 'danger',
            message: 'Logout failed',
          });
        },
      });
  }

  navigateToSearch() {
    this.openToggleSearch = false;
    const queryParams = JSON.parse(JSON.stringify(this.searchForm.value));
    void this.router.navigate([NAVIGATION_URL_VALUES.SEARCH_HANDLER], {
      queryParams,
    });
  }
}
