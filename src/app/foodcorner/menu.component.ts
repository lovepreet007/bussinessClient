import { Component } from '@angular/core';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  subscription: Subscription;
  menuPage: FormGroup;
  constructor(private sub: DynamicEmitterService, private fb: FormBuilder, private router: Router) {
  }
  images: any[];
  ngOnInit() {
 this.images = [];
        this.images.push({source:'/assets/images/page1.jpg', title:'Title 1'});
        this.images.push({source:'/assets/images/page2.jpg', title:'Title 2'});
        this.images.push({source:'/assets/images/page3.jpg',  title:'Title 3'});
        this.images.push({source:'/assets/images/page4.jpg',  title:'Title 4'});
        this.images.push({source:'/assets/images/page5.jpg',  title:'Title 5'});
  }
  NavigateForFoodOrder(){
    debugger
   this.router.navigate(['foodOrder']);
  }
}
