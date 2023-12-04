import { Component } from '@angular/core';

@Component({
  selector: 'app-user-storys',
  templateUrl: './user-storys.component.html',
  styleUrls: ['./user-storys.component.css']
})
export class UserStorysComponent {
  newPost: { text: string; image: File | null; video: File | null } = { text: '', image: null, video: null };
  istextPost: boolean = false;
  posts: { text: string; image: string | null; video: string | null }[] = [];
  visiblePosts: any[] = [];
  createAstory: boolean = true;
  showMoreStories = false;
  ngOnInit() {
    // Fetch posts from the backend and populate the 'posts' array
    // For simplicity, using dummy data here
    this.posts = [
      { text: '', image: 'assets/Sihle.jpg', video: null },
      // 'assets/Sihle.jpg'
      { text: '', image: null, video: 'assets/alumniV.mp4' },
      { text: '', image: 'assets/Themba.jpg', video: null },
      { text: '', image: null, video: 'assets/alumniV.mp4' },
      { text: '', image: 'assets/Sneh.jpg', video: null },
    ];

    this.visiblePosts = this.posts.slice(0, 3);
  }
  onPostUpload(event: Event): void {
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
  createPost(){
    console.log('Creating post:', this.newPost);
    // Reset the form
    this.newPost = { text: '', image: null, video: null };
  }
  handleImageUpload(event: any){
    this.newPost.image = event.target.files[0];
  }

  handleVideoUpload(event: any){
    this.newPost.video = event.target.files[0];
  }

  showtextfield(){
    this.istextPost = !this.istextPost;
  }

  toggleMoreStories() {
    this.showMoreStories = !this.showMoreStories;

    if (this.showMoreStories) {
      // If showMoreStories is true, show all posts
      this.visiblePosts = this.posts;
    } else {
      // If showMoreStories is false, show only a certain number of posts
      this.visiblePosts = this.posts.slice(0, 3);
    }
  }
  showStoryCreate(){
    this.createAstory = !this.createAstory;
  }
}
