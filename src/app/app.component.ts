import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NotificationData,
  NotificationService,
} from '@school-master/utilities/service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@school-master/services';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ApiModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private notificationService = inject(NotificationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  notification?: NotificationData;

  ngOnInit() {
    this.enableNotification();
  }

  private enableNotification() {
    this.notificationService
      .getNotification$()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.changeDetectorRef.detectChanges())
      )
      .subscribe((value) => {
        this.notification = {
          ...value,
          styleClass: `alert alert-dismissible fade show alert-${
            value.modifier || 'success'
          }`,
        };
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
          this.notification = {};
          this.changeDetectorRef.markForCheck();
        }, value.timing ?? 3000);
      });
  }
}
