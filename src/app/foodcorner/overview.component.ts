import { Component } from '@angular/core';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  subscription: Subscription;
  overviewPage: FormGroup;
  constructor(private sub: DynamicEmitterService, private fb: FormBuilder) {
  }
  ngOnInit() {
    debugger;
    let k = this.Overview();
    debugger
  }
  Overview() {
    debugger
    this.overviewPage = this.fb.group({

      overviewInformation: this.fb.array([this.OverviewInfo()])
    });
    debugger

  }
  OverviewInfo() {
debugger
    return this.fb.group({
      phoneNumber: ['9999999999'],
      openingHours: ['Today  11:30 AM to 10:30 PM'],
      highlights: ['Free Home Delivery'],
      address: ['abc kormangala'],
      cost: ['₹400 for two people (approx.)']
    });
  }
}
