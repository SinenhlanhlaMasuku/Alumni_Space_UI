import { Component } from '@angular/core';

@Component({
  selector: 'app-who-to-follow',
  templateUrl: './who-to-follow.component.html',
  styleUrls: ['./who-to-follow.component.css']
})
export class WhoToFollowComponent {

}
class Connection {
  name: string;
  occupation: string;
  avatarSrc: string;

  constructor(name: string, occupation: string, avatarSrc: string) {
    this.name = name;
    this.occupation = occupation;
    this.avatarSrc = avatarSrc;
  }
}

