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