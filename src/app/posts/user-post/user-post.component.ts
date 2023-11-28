import { Component } from '@angular/core';
import { StoriesServiceService } from './stories-service.service';
import{ Subscription} from 'rxjs'


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

  private postSubscription: Subscription;

  constructor(private storiesService: StoriesServiceService) {
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
            const reader = new FileReader();
            reader.onload = (e: any) => {
              this.imageFile = e.target.result;
            };
            reader.readAsDataURL(file);
          }
          
          
        }
}
