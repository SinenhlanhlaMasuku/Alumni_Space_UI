import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const formData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/login', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      if(response.message === 'Login successful!' ){
        console.log(response.result[0].fullname);
        localStorage.setItem('name',response.result[0].fullname.toString());
        this.router.navigate(['/homepage']);
      }
    });
  }
}
