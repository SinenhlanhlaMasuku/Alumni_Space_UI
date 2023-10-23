import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  template:`<div class="modal-body">
          <img [src]="image" alt="Alumni Image" style="width: 200px; height: 200px;" />
            <button type="button" class="btn btn-default" (click)="modalRef.hide()">{{closeBtnName}}</button>
             </div>`
  
  
  //styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  @Input() image: string | undefined;
  closeBtnName: string | undefined;

  modalRef: any;
}
