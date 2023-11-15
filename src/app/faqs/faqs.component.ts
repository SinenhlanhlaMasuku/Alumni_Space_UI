import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent {
  

  showAnswer: { [key: number]: boolean } = {};

  toggleAnswer(index: number) {
    this.showAnswer[index] = !this.showAnswer[index];
  }
}
