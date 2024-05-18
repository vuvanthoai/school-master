import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '@school-master/services';
import { NotificationService } from '@school-master/utilities/service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  private authenticationService = inject(AuthenticationService);
  private notificationService = inject(NotificationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  loading = false;

  submitResetPasswordRequest() {
    if (this.emailControl.invalid) return;
    this.loading = true;
    this.authenticationService
      .resetPassword({
        body: {
          email: this.emailControl.value ?? '',
        },
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          this.notificationService.setNotification({
            message: 'Reset Password request have been sent successfully',
          });
        },
        error: () => {
          this.notificationService.setNotification({
            modifier: 'danger',
            message: 'Reset Password request have been sent unsuccessfully',
          });
        },
      });
  }
}
