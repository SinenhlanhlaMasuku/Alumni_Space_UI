import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit() {
    const storedEmail = localStorage.getItem('email');
    
    if (storedEmail) {
      // Update the 'name' property if 'name' is found in localStorage
      this.email = storedEmail;
    }
  }

  resetPassword() {
    const formData = { email: this.email, password: this.password };
    this.http.put('http://localhost:3000/forgot-password', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      if(response.message === 'Login successful!' ){
        console.log(response.result[0].name);
        localStorage.setItem('name',response.result[0].name.toString());
        this.router.navigate(['/homepage']);
      }
      
    });
  }
}
