import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  isResultLoaded = false;
  constructor(private http: HttpClient) { }

  private events: any[] = [];

  id = '';
  event_title : string= ' ';
  event_description : string= '';
  event_date : string= ' ';
 
  getAllEvents()
  { 
    this.http.get("http://localhost:3000/api/event")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.events = resultData.data;
        console.log(this.events);
    });

  }
  addEvent(event: any) {
    this.events.push(event);
    this.saveEventsToLocalStorage();

    let bodyData = {
      "event_title" : this.event_title,
      event_description : this.event_description,
      event_date : this.event_date,
    };
    this.http.post("http://localhost:3000/api/event",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Event Added Successfully");
        this.getAllEvents();
 
    });
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
