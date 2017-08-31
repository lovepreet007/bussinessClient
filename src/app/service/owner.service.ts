import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { OTPResponse } from '../address/address.component.viewmodel'
import { OrderDetails, ProductToBuy, ResponseResult } from '../order/order.component.viewmodel'
import { OwnerDetails } from '../owner/owner.component.viewmodel'
import { Address } from '../address/address.component.viewmodel'
import { PaymentDetails } from '../payment/payment.component.viewmodel'

@Injectable()
export class OwnerService {

  constructor(private _http: Http) {
  }
  FetchOwnersData(): Observable<OwnerDetails[]> {
    return this._http.get('http://localhost:52793/api/order/FetchOwnersData').map(this.fetchOwnersDataDetails).catch(this.handleError);
  }
  UpdatedOwnersData(orderId: string): Observable<OwnerDetails[]> {
    return this._http.get('http://localhost:52793/api/order/FetchUpdatedOwnersData?orderId=' + orderId).map(this.fetchOwnersDataDetails).catch(this.handleError);
  }

  fetchOwnersDataDetails(res: Response) {
    let body = res.json();
    return body;
  }

  handleError(err: any) {
    return Observable.throw(err.statusText);
  }

  public InitializeOwnerDetails(): OrderDetails {
    return {
      address: this.Address(),
      productToBuy: this.ProductToBuy(),
      payment: '',
      isActive: false,
      orderPlacedOn: null,
      orderCompleted: null
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

}
