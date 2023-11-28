import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoriesServiceService {
 private postSubject = new BehaviorSubject<any>(null);
  public post$ = this.postSubject.asObservable();

  private previewUrlSubject = new BehaviorSubject<string | null>(null);
  public previewUrl$ = this.previewUrlSubject.asObservable();


  constructor() { }
  updatePost(post: any) {
    this.postSubject.next(post);
  }

// stories-service.service.ts

updatePreviewUrl(previewUrl: string | null) {
  console.log('Preview URL:', previewUrl);
  this.previewUrlSubject.next(previewUrl);
}

}
