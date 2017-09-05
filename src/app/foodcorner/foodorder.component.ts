import { Component } from '@angular/core';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodOnlineOrderService } from '../service/foodonlineorder.service';
import { FoodDetails} from '../foodcorner/food.viewmodel';


@Component({
  selector: 'foodorder',
  templateUrl: './foodorder.component.html'
})
export class FoodOrderComponent {
  title:string;
  foodDetails:FoodDetails;
  constructor(private sub: DynamicEmitterService, private fb: FormBuilder,private foodOnlineOrderService:FoodOnlineOrderService) {
  }

  ngOnInit() {
    this.title ='order food';
    this.foodOnlineOrderService.GetFoods().subscribe(data=>{this.foodDetails=data;debugger})
    this.OnlineFood();
  }
  OnlineFood(){

  }
}
