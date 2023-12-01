import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'config';

@Injectable({
  providedIn: 'root'
})
export class JobAppService {

  private apiUrl = 'http://localhost:3000/api/jobs/trackApp/';

  constructor(private http: HttpClient) {}

  //this method needs to take in the acc_id
  getApplications(account_id: any): Observable<any> {
    const apiUrlWithAccount = `${this.apiUrl}/${account_id}`;
    console.log(account_id);
    //return this.http.get(apiUrlWithAccount);//include acc_id on the api urk
    //return this.http.post(this.apiUrl,account_id);
    return this.http.get<any>(`http://localhost:3000/api/jobs/trackApp/:id`,account_id);
  }
}
