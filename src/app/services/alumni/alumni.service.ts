import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/count_alumni';

 

  getAlumniCount(): Observable<{ alumni_count: number }> {
    return this.http.get<{ alumni_count: number }>(this.apiUrl);
  }
}
