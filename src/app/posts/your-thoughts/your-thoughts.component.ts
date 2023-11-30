import { Component,} from '@angular/core';
import { StoriesServiceService } from '../user-post/stories-service.service';
import { ChangeDetectionStrategy } from '@angular/core';
interface Comment {
  commenter: string;
  text: string;
}

interface Post {
  postedCaption: string;
  url?: string | null | undefined;
  videoUrl?: string | null | undefined;
  reactions: string[];
  comments: Comment[];
  shares: string[];
}

@Component({
  selector: 'app-your-thoughts',
  templateUrl: './your-thoughts.component.html',
  styleUrls: ['./your-thoughts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})


export class YourThoughtsComponent {
  
  postedtext: string=''; 
  postedCaption: string ='';
  ispostPhoto: boolean = false;
  // videoUrl: string='';
  videoUrl: string | null = null;
  msg: string | null = null;
  posts: Post[] = [];
   
   // Reactions, comments, and shares for the current post
   reactions: string[] = [];
   comments: Comment[] = [];
   shares: string[] = [];

   // Properties for handling new comments
  newCommenter: string = ''; // Alumni's name
  newCommentText: string = ''; // Comment text
  showCommentField: boolean = false; // Flag to show/hide comment text field


  constructor(private storiesService: StoriesServiceService){
    this.postedCaption = '';
    this.url = null;
    this.videoUrl = null;
    this.reactions = [];
    this.comments = [];
    this.shares = [];
    this.newCommenter = '';
    this.newCommentText = '';
    this.showCommentField = false;
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
  url: string | null = null;
  // videoUrl: string | null = null;

  submitResponse(index: number) {
  
    const post = {
      caption: this.postedtext,
      
      imageFile: this.selectedImage,
      //videoFile: this.selectedVideo ? this.selectedVideo : null,
    };

    this.postedCaption = this.postedtext
    // this.ispostPhoto = true;

    console.log(post);
    // if (!this.url && !this.videoUrl) {
    //   this.msg = 'Please select an image or video.';
    //   return;
    // }

    if (!this.postedCaption && !this.url && !this.videoUrl) {
      this.msg = 'Please enter a caption, or select an image or video.';
      return;
    }

    // Add the current post to the array
    // this.posts.push({
    //   postedCaption: this.postedCaption,
    //   url: this.url,
    //   videoUrl: this.videoUrl,
    // });
    // Add the current post to the array
    this.posts.push({
      postedCaption: this.postedCaption,
      url: this.url,
      videoUrl: this.videoUrl,
      reactions: this.reactions,
      comments: this.comments,
      shares: this.shares,
    });


    this.storiesService.updatePost(post);
  // Clear the input after posting
  this.postedtext = '';
  // Reset the selected image
  this.selectedImage = null;
  this.selectedVideo = null;
  this.postedCaption = '';
    this.url = null;
    this.videoUrl = null;
    this.reactions = [];
    this.comments = [];
    this.shares = [];
    this.newCommenter = '';
    this.newCommentText = '';
    this.showCommentField = false;
    this.msg = null;

}
  // Method to add a new post
  // addPost(): void {
    // Validate that either url or videoUrl is present
    // if (!this.url && !this.videoUrl) {
    //   this.msg = 'Please select an image or video.';
    //   return;
    // }

    // Add the current post to the array
    // this.posts.push({
    //   postedCaption: this.postedCaption,
    //   url: this.url,
    //   videoUrl: this.videoUrl,
    // });

    // Reset properties for the next post
    // this.postedCaption = '';
    // this.url = null;
    // this.videoUrl = null;
    // this.msg = null;
  // }



onPhotoUpload(event: any) {
  const file = event.target.files[0];
  this.selectedImage = file;
  this.alumniStoryPic = this.selectedImage;
}

onVideoUpload(event: any) {
  const file = event.target.files[0];
  this.selectedVideo = file;
}


//new
//url; //Angular 8
// url: any; //Angular 11, for stricter type
// msg = "";

//selectFile(event) { //Angular 8
// selectFile(event: any) { //Angular 11, for stricter type
//   if(!event.target.files[0] || event.target.files[0].length == 0) {
//     this.msg = 'You must select an image';
//     return;
//   }
  
//   var mimeType = event.target.files[0].type;
  
//   if (mimeType.match(/image\/*/) == null) {
//     this.msg = "Only images are supported";
//     return;
//   }
  
//   var reader = new FileReader();
//   reader.readAsDataURL(event.target.files[0]);
  
//   reader.onload = (_event) => {
//     this.msg = "";
//     this.url = reader.result; 
//   }
// }

selectFile(event: any): void {
  const file = event.target.files?.[0];
  
  if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
          // Check if the file is an image
          if (file.type.startsWith('image')) {
              this.url = e.target.result;
              this.videoUrl = null; // Clear video URL if an image is selected
          } else if (file.type.startsWith('video')) {
              this.videoUrl = e.target.result;
              this.url = null; // Clear image URL if a video is selected
          } else {
              // Handle other file types if needed
              this.msg = 'Invalid file type. Please select an image or video.';
          }
      };

      reader.readAsDataURL(file);
  }
}
 
  // Method to toggle comment field visibility
  toggleCommentField(event : any) {
    this.showCommentField = !this.showCommentField;
    console.log('toggled!');
    this.showCommentField= true;
  
   

  }

  // Method to add a new comment
  addComment(): void {
    // Validate that both commenter and comment text are provided
    if (this.newCommenter && this.newCommentText) {
      // Add the new comment to the current post
      this.comments.push({
        commenter: this.newCommenter,
        text: this.newCommentText,
      });

      // Reset the comment text field
      this.newCommentText = '';
    }
  }

}

