import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private documents: File[] = [];
  private apiUrl = 'http://localhost:3000/api/upload';

  uploadDocument(document: File) {
    this.documents.push(document);

    const formData = new FormData();
    formData.append('file_name', document);
    formData.append('fileType', 'academic');

    console.log(formData);
    
    return this.http.post(this.apiUrl, formData);
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

  getImages() {
    return this.images;
  }
}
