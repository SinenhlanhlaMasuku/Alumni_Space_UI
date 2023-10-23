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
    //data to pass to back-end
    const formData = { email: this.email, password: this.password };
    //
    this.http.post('http://localhost:5000/auth/login', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      
      if(response){
        //recieve data from server
        console.log(response.password);
        console.log(response.role);
        ;
        this.router.navigate(['/homepage']);
      }else{
        this.router.navigate(['/forgot-password']);
      }
      
    });
  }


  onSubmit() {
    const formData = { fullname: this.fullname,surname: this.surname, email: this.email, password: this.password };
    this.http.post('http://localhost:5000/auth/register', formData).subscribe((response: any) => {
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