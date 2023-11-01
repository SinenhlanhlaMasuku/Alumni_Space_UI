import { Component } from '@angular/core';

@Component({
  selector: 'app-your-thoughts',
  templateUrl: './your-thoughts.component.html',
  styleUrls: ['./your-thoughts.component.css']
})
export class YourThoughtsComponent {
  // Functions for the functionalities
  uploadPhoto(): void {
    // Handle photo upload functionality
    console.log('Upload photo');
  }

  uploadVideo(): void {
    // Handle video upload functionality
    console.log('Upload video');
  }

  createEvent(): void {
    // Handle event creation functionality
    console.log('Create event');
  }

  expressFeelingActivity(): void {
    // Handle feeling/activity expression functionality
    console.log('Express feeling/activity');
  }

  createPoll(): void {
    // Handle create a poll functionality
    console.log('Create a poll');
  }

  askQuestion(): void {
    // Handle asking a question functionality
    console.log('Ask a question');
  }

  help(): void {
    // Handle help functionality
    console.log('Help');
  }
}
