import { Component } from '@angular/core';
import { QuestionService } from '../dynamic/question.service';
@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  providers: [QuestionService]
})
export class FoodComponent {
  questions: any[];
  constructor(private service: QuestionService) {
    this.questions = service.getFoodPage();
  }
  ngOnInit() {
  }
}



