import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private events: any[] = [];

  addEvent(event: any) {
    this.events.push(event);
    this.saveEventsToLocalStorage();
  }

  getEvents() {
    this.loadEventsFromLocalStorage();
    return this.events;
  }

  private saveEventsToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  private loadEventsFromLocalStorage() {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      this.events = JSON.parse(storedEvents);
    }
  }
}
