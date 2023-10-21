import { Component } from '@angular/core';

@Component({
  selector: 'app-last-few-notifications',
  templateUrl: './last-few-notifications.component.html',
  styleUrls: ['./last-few-notifications.component.css']
})
export class LastFewNotificationsComponent {
  notifications = [
    {
      id:1,
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12-oct-2023",
    },
    {
      id:1,
      subject: "Secure your future",
      message: "you are invited to the annu....",
      date: "23-oct-2023",
    },
    {
      id:1,
      subject: "Live good today",
      message: "you are invited to the annu....",
      date: "5-nov-2023",
    },
    {
      id:1,
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "01-dec-2023",
    },
    {
      id:1,
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12-oct-2023",
    },
  ]
}
