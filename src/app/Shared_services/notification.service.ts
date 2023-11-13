import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private unreadNotificationCountSource = new BehaviorSubject<number>(0);
  unreadNotificationCount$ = this.unreadNotificationCountSource.asObservable();

  updateUnreadNotificationCount(count: number): void {
    this.unreadNotificationCountSource.next(count);
  }
}