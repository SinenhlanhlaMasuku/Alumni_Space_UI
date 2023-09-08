import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  name: string = '';
  
  ngOnInit() {
    const storedName = localStorage.getItem('name');
    
    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.name = storedName;
    }
  }

}
