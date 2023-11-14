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
  baseUrl = 'http://localhost:3000'
 

  //CRUD
  addEvent(event: any) {
    this.events.push(event);
    this.saveEventsToLocalStorage();

    let bodyData = {
      "event_title" : event.title,
      "event_description" : event.description,
      "event_date" : event.eventDate,
    };
    this.http.post("http://localhost:3000/api/event",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Event Added Successfully");
        this.getAllEvents();
 
    });
  }

  getAllEvents()
  { 
    this.http.get("http://localhost:3000/api/event").subscribe((resultData: any)=>{
        //this.isResultLoaded = true;
        //console.log(resultData.events);
        this.events = resultData.events;
        //console.log(this.events);
        localStorage.setItem('events', JSON.stringify(resultData.events));
    });
  }
  
  getEvents() {
    this.loadEventsFromLocalStorage();
    //this.getAllEvents();
    return this.events;
  }

  updateEvent(){}

  deleteEvent(event_id: any){
    console.log(event_id);
    const url = "http://localhost:3000/api/event/delete" + "/" + event_id;
    this.http.delete(url).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Event Deleted")
    });
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
