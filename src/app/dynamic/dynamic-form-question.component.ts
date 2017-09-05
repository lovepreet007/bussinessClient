import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { QuestionBase } from './question-base';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor(private pub: DynamicEmitterService) {
    this.question;
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
  onLinkClickEvent($event: any) {
    this.pub.stringpublish$($event);
  }
}
