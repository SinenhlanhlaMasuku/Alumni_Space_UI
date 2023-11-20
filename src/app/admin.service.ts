import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private queries: any[] = [];
  
  getQueries(): any[] {
    return this.queries;
  }
  storeQuery(query: any): void {
    this.queries.push(query);
  }

  respondToQuery(index: number, response: string): void {
    if (index >= 0 && index < this.queries.length) {
      this.queries[index].response = response;
      this.queries[index].status = 'Responded';
    }
  }
  }
