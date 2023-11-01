import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-viewing',
  templateUrl: './event-viewing.component.html',
  styleUrls: ['./event-viewing.component.css']
})
export class EventViewingComponent {
  events: any[] = [];
  currentDate: Date = new Date();

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  // Custom function to calculate time difference and return the "posted ... ago" message
  getTimeDifference(datePosted: Date): string {
    const timeDiff = this.currentDate.getTime() - new Date(datePosted).getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return ` ${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return ` ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return ` ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return ` a few seconds ago`;
    }
  }
}
