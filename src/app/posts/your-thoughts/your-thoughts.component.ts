import { Component } from '@angular/core';
import { StoriesServiceService } from '../user-post/stories-service.service';

@Component({
  selector: 'app-your-thoughts',
  templateUrl: './your-thoughts.component.html',
  styleUrls: ['./your-thoughts.component.css']
})
export class YourThoughtsComponent {
  
  postedtext: string=''; 

  constructor(private storiesService: StoriesServiceService){

  }

 
  onMediaUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected video file

    if (file) {

    }
  }
  data = [
    { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '' },
    { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '' }
  ];
  responseForms: boolean[] = new Array(this.data.length).fill(false);

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  selectedImage: File | null = null;
  selectedVideo: File | null = null;
  imageFile: File | null = null;
  alumniStoryPic: File | null = null;
  submitResponse(index: number) {
    this.data[index].status = 'Answered';
    this.responseForms[index] = false;

    // this.postedtext.style.color='red';

    // alert( this.postedtext)

    const post = {
      caption: this.postedtext,
      imageFile: this.selectedImage,
      //videoFile: this.selectedVideo ? this.selectedVideo : null,
    };

    console.log('uploaded image: ' + this.alumniStoryPic)
    // const post = {
    //   caption: this.postedtext,
    //   imageFile: 'assets/Sneh.jpg',
    //   videoFile: this.selectedVideo ? this.selectedVideo : null,
    // };

    console.log(post);

    this.storiesService.updatePost(post);
  // Clear the input after posting
  this.postedtext = '';
  // Reset the selected image
  this.selectedImage = null;
  this.selectedVideo = null;
}
onPhotoUpload(event: any) {
  const file = event.target.files[0];
  this.selectedImage = file;
  this.alumniStoryPic = this.selectedImage;
}

onVideoUpload(event: any) {
  const file = event.target.files[0];
  this.selectedVideo = file;
}
}

