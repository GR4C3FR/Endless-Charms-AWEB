import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationService, Notification } from './services/notification.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet />
    @if (notification.show) {
      <div class="toast-notification" [class.success]="notification.type === 'success'" 
           [class.error]="notification.type === 'error'" 
           [class.info]="notification.type === 'info'">
        {{ notification.message }}
      </div>
    }
  `,
  styleUrl: './app.css'
})
export class App {
  notification: Notification = { message: '', type: 'success', show: false };

  constructor(private notificationService: NotificationService) {
    this.notificationService.notification$.subscribe(notification => {
      this.notification = notification;
    });
  }
}
