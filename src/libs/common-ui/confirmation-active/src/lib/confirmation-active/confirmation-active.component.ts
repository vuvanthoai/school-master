import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '@school-master/services';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NotificationService } from '@school-master/utilities/service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmation-active',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './confirmation-active.component.html',
  styleUrl: './confirmation-active.component.scss',
})
export class ConfirmationActiveComponent implements OnInit {
  private authenticationService = inject(AuthenticationService);
  private activatedRoute = inject(ActivatedRoute);
  private notificationService = inject(NotificationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  uid = this.activatedRoute.snapshot.queryParams['uid'];
  token = this.activatedRoute.snapshot.queryParams['token'];

  confirming = true;

  ngOnInit(): void {
    this.authenticationService
      .signUpConfirm({
        uid: this.uid,
        token: this.token,
      })
      .pipe(
        finalize(() => {
          this.changeDetectorRef.detectChanges();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.confirming = false;
        },
        error: (err) => {
          this.notificationService.setNotification({
            modifier: 'danger',
            message: err.message ?? 'Some thing went wrong.',
          });
        },
      });
  }
}
