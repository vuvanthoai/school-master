import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NotificationData {
  modifier?: 'success' | 'danger' | 'warning' | 'info' | 'primary';
  styleClass?: string;
  message?: string;
  description?: string;
  timing?: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notification = new BehaviorSubject<NotificationData>({});

  getNotification$(): BehaviorSubject<NotificationData> {
    return this._notification;
  }

  setNotification(value: NotificationData) {
    this._notification.next(value);
  }
}
