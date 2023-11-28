import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoriesServiceService {
 private postSubject = new BehaviorSubject<any>(null);
  public post$ = this.postSubject.asObservable();
  constructor() { }
  updatePost(post: any) {
    this.postSubject.next(post);
  }
}
