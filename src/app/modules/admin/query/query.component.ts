import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
 
  
  data = [
    { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '' },
    { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '' }
  ];
  queries: any[] = [];
  responseForms: boolean[] = new Array(this.data.length).fill(false);
  
  constructor(private http: HttpClient){}

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number) {
    this.data[index].status = 'Answered';
    this.responseForms[index] = false;
  }

  submitResponse1(index: number) {
    this.queries[index].status = 'Answered';
    this.responseForms[index] = false;
    
    localStorage.setItem('queries', JSON.stringify(this.queries));

    //respond
    this.respondToQuery(this.queries[index]);
  }

  ngOnInit(){
    const storedEvents = localStorage.getItem('queries');
    if (storedEvents) {
      this.queries = JSON.parse(storedEvents);
      console.log(this.queries);
    }
  }
  

  private apiUrl = 'http://localhost:3000/api/respond_query';  

  respondToQuery(query: any){
    const requestBody = {
      query_id: 1,
      query_text: query.status
    };
    console.log(requestBody);

    this.http.post<any>('http://localhost:3000/api/respond_query', requestBody).subscribe(response => {
    console.log('Query sent to server:', response);
  });
  }

  
  }
  
