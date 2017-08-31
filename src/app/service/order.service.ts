import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { OTPResponse } from '../address/address.component.viewmodel'
import { OrderDetails, ProductToBuy,ResponseResult } from '../order/order.component.viewmodel'
import { Address } from '../address/address.component.viewmodel'
import { PaymentDetails } from '../payment/payment.component.viewmodel'

@Injectable()
export class OrderService {

  constructor(private _http: Http) {
  }
  SendOTP(phoneNumber: string): Observable<OTPResponse> {
    return this._http.get('http://localhost:52793/api/order/GenerateOTP?phoneNumber=' + phoneNumber).map(this.SendSMS).catch(this.handleError);
  }

  SubmitOrder(orderDetails: OrderDetails): Observable<ResponseResult> {
    let body = JSON.stringify(orderDetails);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:52793/api/order/orderdetails',body,options).map(this.OrderDetail).catch(this.handleError);
  }
  private extractSearchItem(res: Response) {
    let body = <string[]>res.json();
    return body;
  }
  private OrderDetail(res: Response) {
   
    let body = res.json();
    return body;
  }
  private SendSMS(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(err: any) {
    return Observable.throw(err.statusText);
  }

  public InitializeOrderDetails(): OrderDetails {
    return {
      address: this.Address(),
      productToBuy: this.ProductToBuy(),
      payment: '',
      isActive:false,
      orderPlacedOn:null,
      orderCompleted:null
    }

  }
  private Address(): Address {
    return {
      name: '',
      phoneNumber: '',
      pinCode: '',
      street: '',
      city: '',
      state: '',
      landmark: '',
      verification: ''
    }
  }
  ProductToBuy(): ProductToBuy {
    return {
      medicineId: '',
      medicineName: '',
      medicineManufacturer: '',
      filterId: ''
    }
  }
    ResponseResult(): ResponseResult {
    return {
      status:'',
      message:''
    }
  }
}
