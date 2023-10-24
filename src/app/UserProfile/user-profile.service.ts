import { Injectable,  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private isViewSubject = new BehaviorSubject<boolean>(true);
  isView$ = this.isViewSubject.asObservable();
  
  constructor() {
    this.isViewSubject.next(true);
   }

  viewProfile(){
    this.isViewSubject.next(true);
  }
  editProfile(){
    this.isViewSubject.next(false);
  }
}
