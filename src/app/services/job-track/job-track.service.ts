import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobTrackService {

  private apiUrl = 'http://localhost:3000/api/alumni';

  constructor(private http: HttpClient) {}

  getAlumni(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}