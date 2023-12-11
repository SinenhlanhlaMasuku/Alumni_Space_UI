import { Component,} from '@angular/core';
import { StoriesServiceService } from '../user-post/stories-service.service';
import { ChangeDetectionStrategy } from '@angular/core';
interface Comment {
  id: number;
  commenter: string;
  text: string;
  commenterPic: string;
}

interface Post {
  postedCaption: string | null | undefined;
  url?: string | null | undefined;
  videoUrl?: string | null | undefined;
  // reactions: string[];
  comments: Comment[];
  // shares: string[];
  showComment: boolean;
  noLikes: number;
  noLoves: number;
 liked: boolean;
 loved: boolean;

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
  isPostedCaption: boolean = false;
  ispostPhoto: boolean = false;
  // videoUrl: string='';
  videoUrl: string | null = null;
  msg: string | null = null;
  posts: Post[] = [];
   // Reactions, comments, and shares for the current post
  //  reactions: string[] = [];
   comments: Comment[] = [];
  //  shares: string[] = [];
   noComments: number = 0;
   i: number=0;
 // Properties for handling new comments
 newCommenter: string = ''; // Alumni's name
 newCommentText: string = ''; // Comment text
 showComment: boolean = false; // Flag to show/hide comment text field
 newText: string[] = []; 
 liked: boolean = false;
  loved: boolean = false;
  noLikes: number = 0;
  noLoves: number = 0;

constructor(){
   const posts: Post={
      postedCaption: '',
      url: '',
      videoUrl: '',
  // reactions: string[];
    comments: [],
  // shares: string[];
  showComment: this.showComment,
  noLikes: 0,
  noLoves: 0,
   liked: this.liked,
   loved: this.loved,

   }
  }
  

 
  onMediaUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected video file

    if (file) {

    }
  }
  // data = [
  //   { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '' },
  //   { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '' }
  // ];
  // responseForms: boolean[] = new Array(this.data.length).fill(false);

  // toggleResponseForm(index: number) {
  //   this.responseForms[index] = !this.responseForms[index];
  // }

  selectedImage: File | null = null;
  selectedVideo: File | null = null;
  imageFile: File | null = null;
  alumniStoryPic: File | null = null;
  url: string | null = null;
  // videoUrl: string | null = null;

  // posts: Post, index: any

  submitResponse() {
    // const post = {
    //   caption: this.postedtext,
      
    //   imageFile: this.selectedImage,
    //   videoFile: this.selectedVideo ? this.selectedVideo : null,
    //   postedCaption: this.postedtext,
    //   isPostedCaption: !this.isPostedCaption,
      
    // };
    this.i = this.i+1;
    // index = this.i;
    this.isPostedCaption = true;
    this.postedCaption = this.postedtext
    // this.ispostPhoto = true;

    // console.log(posts);
    

    if (!this.postedCaption && !this.url && !this.videoUrl) {
      this.msg = 'Please enter a caption, or select an image or video.';
      return;
    }
    else{


    }
    
    // Add the current post to the array
    this.posts.push({
      postedCaption: this.postedtext,
      url: this.url,
      videoUrl: this.videoUrl,
      comments: this.comments,
      
      showComment: this.showComment,
      noLikes: this.noLikes,
      noLoves: this.noLoves,
      liked: this.liked,
      loved: this.loved,
    });

     console.log('posts: ' + this.posts)
    // this.storiesService.updatePost(post);
  // Clear the input after posting
  this.postedtext = '';
  // Reset the selected image
  this.selectedImage = null;
  this.selectedVideo = null;
  // this.postedCaption = '';
    this.url = null;
    this.videoUrl = null;
    // this.reactions = [];
    this.comments = [];
    // this.shares = [];
    this.newCommenter = '';
    this.newCommentText = '';
    // this.showCommentField = false;
    this.msg = null;

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

// Method to toggle comment field visibility
toggleCommentField(post : Post, index: number) {
  // this.showCommentField = !this.showCommentField;
  console.log('toggled!');
  post.showComment = !post.showComment;
//  alert('commemnt toggled!')
 

}



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
 

  addComment(post: Post, index: any) {
    if (this.newCommentText.trim() !== '') {
      const newComment: Comment = {
        id: post.comments.length + 1, // Generate a unique id (you may have a better mechanism)
        commenter: 'Sihle Mhlongo', // You might want to get this from user input or authentication
        text: this.newCommentText,
        commenterPic: 'assets/Sihle.jpg',
      };

      post.comments.push(newComment);
      this.newCommentText = ''; // Clear the input field after adding a comment
      this.showComment = false;
    }
  }
  toggleLike(post: Post, index: any) {
    this.liked = !this.liked;
    // Add any other logic you need when like is toggled
    console.log("liked!");
    // this.noLikes++;
    post.noLikes++;

  }

  toggleLove(post: Post, index: any) {
    this.loved = !this.loved;
    // Add any other logic you need when love is toggled
    console.log("loved!");
    // this.noLoves++;
     post.noLoves++;
  }
//  remove(posts: string){
//   confirm(`Are you sure you want to remove the following Post \n "${posts}"`)
//  }
}
