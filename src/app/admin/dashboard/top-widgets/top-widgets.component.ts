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
  
}
