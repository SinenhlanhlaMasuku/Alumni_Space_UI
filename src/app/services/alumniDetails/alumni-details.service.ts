import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import{ Observable} from 'rxjs'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniDetailsService {
  private apiUrl = 'http://example.com/api/alumni'; //insert correct api path
  alumniList: any[] = [];

  constructor(private http: HttpClient) { }

  getListOfAlumni(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchAlumni(name: string): Observable<string> {
    const foundAlumni = this.alumniList.find(alumni => alumni.name.toLowerCase() === name.toLowerCase());
    if (foundAlumni) {
      return of(foundAlumni.name);
    } else {
      return of('Alumni name not found');
    }
  }
}