import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = 'http://localhost:3000/api/count_job';

  constructor(private http: HttpClient) { }

  getJobCount(): Observable<{ job_count: number }> {
    return this.http.get<{ job_count: number }>(this.apiUrl);
  }
  
}
