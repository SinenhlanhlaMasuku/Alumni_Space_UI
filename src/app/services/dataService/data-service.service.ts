import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiUrl = 'http://localhost:3000/api/profile'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    // Assuming you have an endpoint on your backend that provides user data
    return this.http.get<any>(`${this.apiUrl}/user`);
  }
}
