import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alumni_Space_UI';

  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    const formData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3001/api/login', formData).subscribe((response) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.email = '';
      this.password = '';
    });
  }
}
