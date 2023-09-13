import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  
  ngOnInit() {
    const storedEmail = localStorage.getItem('email');
    
    if (storedEmail) {
      // Update the 'name' property if 'name' is found in localStorage
      this.email = storedEmail;
    }
  }
}
