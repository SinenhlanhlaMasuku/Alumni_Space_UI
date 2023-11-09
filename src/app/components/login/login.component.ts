import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private http: HttpClient, private router: Router, private snackbar: MatSnackBar) {}

  onLogin() {
    
    //data to pass to back-end
    const formData = { email: this.email, password: this.password };
    //
    if(this.email.length == 0 || this.password.length ==  0){
         this.showSnackbar('Please fill in the missing field(s)');
    }else{
       this.showSnackbar('login successfully!');
       this.router.navigate(['/alumni/profile/view-profile']);
    }
    if(formData.email !== 'admin@email.com'){
      this.http.post('http://localhost:3000/api/login', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      
      if(response.message === 'Login successful!' ){
        // alert('Login Successfully!');
        console.log(response.result[0].name);
        console.log(response.account_id);
        //store user details to localStorage
        localStorage.setItem('name',response.result[0].name.toString());
        localStorage.setItem('surname', response.result[0].surname.toString());
        localStorage.setItem('account_id',response.account_id);

        // this.router.navigate(['/alumni/home']);
      }else{
        //alert("Invalid Details")
        this.router.navigate(['/auth/forgot-password']);
      }
    });
    }else{
      this.router.navigate(['/admin/dashboard']);
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

  showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });
  }
}