import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  faCoffee,
  faPerson,
  faSuitcase,
  faClock,
  faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  faCoffee = faCoffee;

  constructor(private router: Router){}
}
