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
  surname = '';
  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const formData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/login', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      if(response.message === 'Login successful!' ){
        console.log(response.result[0].name);
        localStorage.setItem('name',response.result[0].name.toString());
        this.router.navigate(['/homepage']);
      }else{
        this.router.navigate(['/forgot-password']);
      }
      
    });
  }

  /*onLogin() {
    const formData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/login', formData, { observe: 'response' }).subscribe((response: any) => {
        console.log('Response from server:', response);
  
        // Clear the form fields after submission
        this.email = '';
        this.password = '';
  
        if (response.status === 200) {
          // Handle successful login
          console.log('User logged in as:', response.body.result[0].name);
          localStorage.setItem('name', response.body.result.name);
          this.router.navigate(['/homepage']);
        } else if (response.status === 401) {
          // Handle invalid login
          console.log('Invalid email or password');
          this.router.navigate(['/forgot-password']);
        } else {
          // Handle other errors
          console.log('An error occurred during login:', response.statusText);
          // You can add additional error handling logic here if needed
        }
      },
      (error) => {
        // Handle network or other errors
        console.error('An error occurred:', error);
        // You can add specific error handling logic here if needed
      }
    );
  } */

  onSubmit() {
    const formData = { fullname: this.fullname,surname: this.surname, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/register', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';
      this.fullname = '';
      this.surname = '';

      this.router.navigate(['/success']);

      
      /*if(response.status === 200){
        this.router.navigate(['/success']);
      }*/
    });
  }

}