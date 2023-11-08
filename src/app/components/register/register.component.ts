import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Alumni_Space_UI';

  email = '';
  password = '';
  fullname = '';
  surname = '';
  // agreeToTerms: boolean = false;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {}

  onLogin() {

    //data to pass to back-end
    // alert('Registered Successfully!');
    alert('Fill in the missing fields!');
    const formData = { email: this.email, password: this.password };

    //
    if(this.email.length ==0 || this.password.length ==0 )
    {
       this.showSnackbar('fill in the missing fields!');
    }
    else{
        alert('go through!')
    }
    
       // alert('Registered Successfully!');
    if(formData.email !== 'admin@email.com'){
      this.http.post('http://localhost:3000/api/login', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';

      
      if(response.message === 'Login successful!' ){
        alert('Registered Successfully!');
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
      this.router.navigate(['/admin/dashboard']);
    }
    
  }
  
  


  onSubmit() {
    // alert('Fill in the missing fields!');
    const formData = { fullname: this.fullname, surname: this.surname, email: this.email, password: this.password };
    
      if(this.fullname.length ==0 || this.surname.length ==0 || this.email.length ==0 || this.password.length ==0){
       
         this.showSnackbar('Fill in the missing fields!');

    }
    else{
      // alert('Registered Successfully!');
      this.showSnackbar('Registered Successfully!');
      this.router.navigate(['/success']);
      this.router.navigate(['/']);
      this.email = '';
      this.password = '';
      this.fullname = '';
      this.surname = '';
    }
         this.http.post('http://localhost:3000/api/register', formData).subscribe((response: any) => {
         
         console.log('Data sent to server:', response);
      //Clear the form fields after successful submission
      // this.email = '';
      // this.password = '';
      // this.fullname = '';
      // this.surname = '';

      // this.router.navigate(['/success']);

      
      // if(response.status === 200){
      //   this.router.navigate(['/success']);
      // }
    });
    

    
  
}

showSnackbar(message: string) {
  this.snackBar.open(message, 'Close', {
    duration: 2000, // Duration the snackbar is shown in milliseconds
    verticalPosition: 'top', // Set the vertical position to 'top'
    horizontalPosition: 'center', // Set the horizontal position to 'center'
    panelClass: ['snackbar'], // Add your custom class for styling
  });
}
}
