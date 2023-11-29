import { Component } from '@angular/core';
import { StoriesServiceService } from './stories-service.service';
import{ Subscription} from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


interface PostInfo{
        user_name: string;
        user_postion: string;
        institution: string;
        user_image: string;
        post_time:string;
        text_message:string;
        image_message: string;
}

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {
  post_id = [1,2,3,4]
  imageFile: File | null = null;
  selectedFile: File | null = null;
  caption?: string;
  imageFilePreview: string | ArrayBuffer | null = null;
  private postSubscription: Subscription;
  postedtext: string=''; 

  // constructor(private storiesService: StoriesServiceService){


  constructor(private storiesService: StoriesServiceService, private http:HttpClientModule) {
    // Subscribe to updates from the shared service
    this.postSubscription = this.storiesService.post$.subscribe((post) => {
      if (post) {
        this.caption = post.caption;
        this.imageFile = post.imageFile;
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.postSubscription.unsubscribe();
  }


  posts: { [id: string]: PostInfo } = { 
    "post_info":{ user_name: "Sinenhlanhla Masuku",
        user_postion: "Web Developer",
        institution: "Tshwane University Of Technology",
        user_image: "assets/Sneh.jpg",
        post_time: "2hr",
        text_message: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
        image_message: "assets/Sneh.jpg"},
   "post_info2":{ user_name: "Thoko Masanabo",
        user_postion: "Fullstack Developer",
        institution: "Tshwane University Of Technology",
        user_image: "assets/Sneh.jpg",
        post_time: "2hr",
        text_message: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
        image_message: "assets/Sneh.jpg"}
         }

         onProfilePicChange(event: any) {
          if (event.target.files && event.target.files.length > 0) {
        
           //select file
            this.selectedFile = event.target.files[0];
          }
      
          //read the image
          this.onImageChange(event);
        }
        onImageChange(event: Event) {
          const inputElement = event.target as HTMLInputElement;
          if (inputElement.files && inputElement.files.length > 0) {
            const file = inputElement.files[0];
            this.imageFile = file; // Set the File object directly
            const reader = new FileReader();
            reader.onload = (e: any) => {
              this.imageFilePreview = e.target.result;
            };
            reader.readAsDataURL(file);
          }
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
        // imageFile: File | null = null;
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
      
