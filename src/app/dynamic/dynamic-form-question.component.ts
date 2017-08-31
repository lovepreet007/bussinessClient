import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { QuestionBase } from './question-base';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor() {
    debugger
    this.question;
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
  onLinkClickEvent($event: any) {
    debugger
    //alert('event  ' + $event + ' data ' + data + ' rowIndex ' + rowIndex + ' column ' + column);
  }
}
