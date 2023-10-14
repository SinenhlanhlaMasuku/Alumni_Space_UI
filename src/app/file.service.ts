import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData) {
    // Send a POST request to the Node.js server
    return this.http.post('http://localhost:3000/upload', formData);
  }
}
