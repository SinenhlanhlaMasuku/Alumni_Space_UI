import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //constructor() { }

  private documents: File[] = [];

  uploadDocument(document: File) {
    this.documents.push(document);
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
