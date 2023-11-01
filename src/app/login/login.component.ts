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
    if(formData.email !== 'admin@email.com'){
      this.http.post('http://localhost:3000/api/login', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      
      if(response.message === 'Login successful!' ){
        console.log(response.result[0].name);
        console.log(response.account_id);
        //store user details to localStorage
        localStorage.setItem('name',response.result[0].name.toString());
        localStorage.setItem('account_id',response.account_id);

        this.router.navigate(['/alumni/home']);
      }else{
        this.router.navigate(['/forgot-password']);
      }
    });
    }else{
      this.router.navigate(['/adminHome']);
    }
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