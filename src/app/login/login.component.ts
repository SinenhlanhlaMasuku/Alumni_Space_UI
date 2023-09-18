import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'Alumni_Space_UI';

  email = '';
  password = '';
  fullname = '';
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

  onSubmit() {
    const formData = { fullname: this.fullname, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/register', formData).subscribe((response) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';
      this.fullname = '';
    });
  }
}
// Add a click event listener to the "Student" and "Admin" links
const studentLink = document.getElementById("student");
const adminLink = document.getElementById("admin");

if (studentLink && adminLink) {
    studentLink.addEventListener("click", () => {
        // Handle Student login logic here
        console.log("Student login clicked");
    });

    adminLink.addEventListener("click", () => {
        // Handle Admin login logic here
        console.log("Admin login clicked");
    });
}
