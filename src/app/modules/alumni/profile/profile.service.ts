import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private documents: File[] = [];
  private apiUrl = 'http://192.168.27.19:3000/api/upload';

  uploadDocument(document: File): Observable<any> {
    this.documents.push(document);

    const formData = new FormData();
    formData.append('file_name', document);
    formData.append('fileType', 'academic');

    console.log(formData);
    
    return this.http.post(this.apiUrl, formData);
  }

  uploadDoc(file: File): Observable<any> { // Specify the return type as Observable
    const formData = new FormData();
    formData.append('file_name', file);
    formData.append('fileType', 'academic');

    return this.http.post('http://localhost:3000/api/upload', formData);
  }
  

  getDocuments() {
    return [...this.documents];
  }

  private certificates: File[] = [];

  uploadCertificates(document: File) {
    this.certificates.push(document);
  }

  getCertificatess() {
    return [...this.certificates];
  }

  private images: File[] = [];

  uploadImage(image: File) {
    this.images.push(image);
  }
  uploadPicture(file: File): Observable<any> { // Specify the return type as Observable
    const formData = new FormData();
    formData.append('file_name', file);
    formData.append('fileType', 'profile');

    return this.http.post('http://localhost:3000/api/upload', formData);
  }

  getImages() {
    return this.images;
  }
}
