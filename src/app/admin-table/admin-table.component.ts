//admin-table.component.ts
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  data: any[] = [];
  responseForms: boolean[] = [];

  constructor(private queryService: AdminService) {}

  ngOnInit(): void {
    // Initialize data by fetching from the service
    this.data = this.queryService.getQueries();
  }

  toggleResponseForm(index: number): void {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number): void {
    const response = this.data[index].response;
    this.queryService.respondToQuery(index, response);
  }
}