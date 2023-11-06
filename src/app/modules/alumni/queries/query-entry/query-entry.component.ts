import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';


@Component({
  selector: 'app-query-entry',
  templateUrl: './query-entry.component.html',
  styleUrls: ['./query-entry.component.css']
})
export class QueryEntryComponent {

constructor(private dialog: MatDialog){}

public openSuccessDialog(): void {
  this.dialog.open(SuccessDialogComponent, {
    data: { message: 'Your message was sent successfully!' },
    closeOnNavigation: true,
  });
}

}
