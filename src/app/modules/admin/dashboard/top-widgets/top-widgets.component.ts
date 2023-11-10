import { Component } from '@angular/core';
import {
  faPerson,
  faSuitcase,
  faClock,
  faCalendarWeek
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  faPerson = faPerson;
  faSuitcase = faSuitcase;
  faClock = faClock;
  faCalendarWeek = faCalendarWeek;

  totalAlumni: number = 10;
  noAlumnActive: number = 18;
  totalJobs: number= 2;
  totalEvents: number = 3;
  //number of active users/alumni
  totalSessions: number = 10;

  //calculations required
  //totalSessions must include % e.g  ((noAlumnActive / totalAlumnReg) * 100)
    start(){
       this.calculateTotSessions(this.noAlumnActive, this.totalAlumni);
    }
   calculateTotSessions(noAlumnActive: number, totalAlumni: number){
        noAlumnActive = this.noAlumnActive;
        totalAlumni = this.totalAlumni;
        this.totalSessions = Math.floor( (noAlumnActive / totalAlumni) * 100);
        return this.totalSessions;
   }
}