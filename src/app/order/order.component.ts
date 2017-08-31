import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SearchService } from '../service/search.service'
import { OrderService } from '../service/order.service'
import { ProductToBuy, ResponseResult } from './order.component.viewmodel'
import { AddressComponent } from '../address/address.component'
import { PaymentComponent } from '../payment/payment.component'
//import { PaymentDetails } from '../payment/payment.component.viewmodel'
import { OrderDetails } from './order.component.viewmodel'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent {
  private productToBuy: ProductToBuy;
  private verified: boolean;
  private verificationSuccesfull: boolean;
  private verificationFailed: boolean;
  private verificationFailedMessage: string = '';
  private cashOnDelivery: boolean;
  private orderDetails: OrderDetails;
  private submissionFailedStatus: boolean = false;
  private submissionFailedMessage: string = '';
  private responseResult: ResponseResult;

  @ViewChild(AddressComponent) addressComponent: AddressComponent;
  @ViewChild(PaymentComponent) paymentComponent: PaymentComponent;

  constructor(private activateRoute: ActivatedRoute, private _searchService: SearchService, private _orderService: OrderService, private router: Router) { }
  ngOnInit() {

    let filterId = + this.activateRoute.snapshot.params['filterId'];
    let medicineId = + this.activateRoute.snapshot.params['medicineId'];
    this._searchService.getSearchResult(filterId.toString(), medicineId.toString(), true).subscribe(data => {
      this.productToBuy = this.PopulteTable(data, filterId.toString(), medicineId.toString())
    })
  }
  private PopulteTable(itemList: ProductToBuy[], filterId: string, medicineId: string): any {

    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].filterId == filterId && itemList[i].medicineId == medicineId) {
        return itemList[i];
      }
    }
  }
  private onSubmit(form: NgForm) {

    this.orderDetails = this._orderService.InitializeOrderDetails();
    this.orderDetails.address = this.addressComponent.addrs;
    this.orderDetails.productToBuy = this.productToBuy;
    this.orderDetails.orderPlacedOn = new Date();
    this.orderDetails.orderCompleted = new Date();
    this.orderDetails.isActive = true;
    //this.paymentComponent.payment = this.InitializePaymentDetails();
    this.orderDetails.payment = this.paymentComponent.payment.paymentType;
    this._orderService.SubmitOrder(this.orderDetails).subscribe(data => { this.OrderSubmitResponse(data); })

  }

  // InitializePaymentDetails(): PaymentDetails {
  //   return {
  //     paymentType: ''
  //   }
  // }

  private OrderSubmitResponse(data: ResponseResult) {

    if (data !== null) {
      this.responseResult = this._orderService.ResponseResult();
      this.responseResult = data;
      if (this.responseResult.status == 'success') {
        let message = this.responseResult.message;
        this.router.navigate(['order-confirm', message]);
      } else {
        this.submissionFailedStatus = true;
        this.submissionFailedMessage = this.responseResult.message;
      }
    }
  }
  // private OrderSubmitResponse() {
  //   let message = 'succussfull';
  //   debugger
  //   this.router.navigate(['order-confirm', message]);
  // }
  private SuccessStatus(successStatus) {
    this.verificationSuccesfull = successStatus;
  }
  private FailedStatus(failedStatus) {
    this.verificationFailed = failedStatus;
  }
  private FailedMsg(failedMsg) {
    this.verificationFailedMessage = failedMsg;
  }
  private Verified(verifiedValue) {
    this.verified = verifiedValue;
  }
  private captchStatus(event: boolean) {
    this.cashOnDelivery = event;
  }
}
