import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Generate a URL for the uploaded image

  private events: any[] = [];

  addEvent(event: any) {
    
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }
}
