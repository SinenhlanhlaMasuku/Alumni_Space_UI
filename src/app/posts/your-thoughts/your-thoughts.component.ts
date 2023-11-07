import { Component } from '@angular/core';

@Component({
  selector: 'app-your-thoughts',
  templateUrl: './your-thoughts.component.html',
  styleUrls: ['./your-thoughts.component.css']
})
export class YourThoughtsComponent {
  onPhotoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected photo file

    if (file) {
      // Handle the photo file upload here
      // You might want to handle the file upload using a service or any other logic specific to your application
      // For example:
      // this.yourService.uploadPhoto(file);
      // where file is the image file
      // Make sure to replace 'yourService' with your actual service
    }
  }

  onVideoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected video file

    if (file) {
      // Handle the video file upload here
      // You might want to handle the file upload using a service or any other logic specific to your application
      // For example:
      // this.yourService.uploadVideo(file);
      // where file is the video file
      // Make sure to replace 'yourService' with your actual service
    }
  }
  onMediaUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected video file

    if (file) {
      // Handle the video file upload here
      // You might want to handle the file upload using a service or any other logic specific to your application
      // For example:
      // this.yourService.uploadVideo(file);
      // where file is the video file
      // Make sure to replace 'yourService' with your actual service
    }
  }
}

