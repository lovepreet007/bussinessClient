import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private pub: DynamicEmitterService) { }

  ngOnInit() {

    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    debugger
    this.form.valid == true ? this.pub.publish$(this.form) : this.form.value;

    //   this.payLoad = JSON.stringify(this.form.value);
  }

}
