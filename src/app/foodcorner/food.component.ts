import { Component } from '@angular/core';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'food',
  templateUrl: './food.component.html',

})
export class FoodComponent {
  subscription: Subscription;

  food: FormGroup;
  imageSource: string;
  tabSelected:boolean;
  constructor(private sub: DynamicEmitterService, private fb: FormBuilder, private router: Router) {

  }
  ngOnInit() {


    // this.subscription = this.sub.subscrib
    //   .subscribe(item => {
    //     if (!!item) {
    //       alert(item)

    //     }
    //   });
    this.tabSelected =true;
    this.imageSource = '/assets/images/VegetableBasket.jpg';
    this.food = this.fb.group({
      foodImage: new FormControl(''),
    });
  }
}



