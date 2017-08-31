import { Component, ViewChild, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { PaymentDetails } from './payment.component.viewmodel'
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',

})
export class PaymentComponent {
  //@ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  payment: PaymentDetails;
  paymentType: string;
  siteKey: string;
  @Output() captchaStatus = new EventEmitter<boolean>();

  captchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
  secretKey = '6LcZnykUAAAAALpqQWSGiDSoGkZ-JmO2OsmgiPiG'
  constructor(private vcr: ViewContainerRef, private http: Http) { }
  ngOnInit() {
  
    this.captchaStatus.emit(false);
    this.siteKey = '6LcZnykUAAAAAH8r8FYFNq5WEQcI9D6DoPOhBY73';
    this.payment = this.InitializePaymentDetails();
    this.payment.paymentType = 'cash';
    this.paymentType = 'cash';

  }

  private handleCorrectCaptcha(captchaResponse: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = new URLSearchParams;
    body.set('secret', this.secretKey);
    body.set('response', captchaResponse);
    return this.http.post(this.captchaUrl, body, { headers: headers })
      .map((response) => response.json())
      .subscribe((data) => {
        console.log(data + '  response'); this.captchaStatus.emit(data.success); this.payment.paymentType = this.paymentType; 
      });
  }
  InitializePaymentDetails(): PaymentDetails {
    return {
      paymentType: ''
    }
  }
}

