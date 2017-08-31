import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Accordion,AccordionTab } from 'primeng/primeng';
@Component({
  selector: 'order-confirm',
  templateUrl: './order.confirm.component.html',

})
export class OrderConfirmComponent {

  submissionSuccessMessage: string = '';

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    let msg =  this.activateRoute.snapshot.params['message'];
    this.submissionSuccessMessage = msg.toString();
   
  }
  ngOnInit() {
  }

  GoToHomePage() {
    this.router.navigateByUrl('/home');
  }

}
