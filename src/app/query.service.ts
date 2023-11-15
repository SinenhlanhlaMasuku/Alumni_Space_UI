//query.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private apiURL = '/api/queries'; // Replace with your API endpoint
  private Query: any[]=[]
  constructor(private http: HttpClient) {
   
   }
   /*getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(this.apiURL);
  }*/

  sendQuery(query: any): Observable<any> {
    return this.http.post<any>(this.apiURL, query);
  }
}
