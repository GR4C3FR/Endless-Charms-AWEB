import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification>({
    message: '',
    type: 'success',
    show: false
  });

  notification$ = this.notificationSubject.asObservable();

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'success') {
    this.notificationSubject.next({ message, type, show: true });
    
    setTimeout(() => {
      this.hideNotification();
    }, 1500);
  }

  hideNotification() {
    const current = this.notificationSubject.value;
    this.notificationSubject.next({ ...current, show: false });
  }
}
