import { Component, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../service/order.service'
import { OTPResponse, Address } from './address.component.viewmodel'
@Component({
  selector: 'address',
  templateUrl: './address.component.html',

})
export class AddressComponent {


  private verification: string;
  // private address: Address=new Address('','','','','','','','');
  public addrs: Address;
  @Output() verificationSuccesfull: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() verificationFailed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() verificationFailedMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() verified: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _orderService: OrderService) { }
  ngOnInit() {
    this.verified.emit(true);
    this.verificationSuccesfull.emit(false);
    this.verificationFailed.emit(false);
    this.verificationFailedMessage.emit('');
    this.addrs = new Address('', '', '', '', '', '', '', '');
    console.log(this.addrs)
  }

  private SendOTP(phoneNumber: string) {

    this._orderService.SendOTP(phoneNumber).subscribe(data => {
      this.OTP(data)
    })
  }
  private OTP(data: OTPResponse) {

    window.sessionStorage.setItem('OTP', data.otp);
    window.sessionStorage.setItem('OTPtime', data.otPtime.toString());
    window.sessionStorage.setItem('Status', data.status.toString());
  }
  private VerifyOTP(verifyOTP: string) {

    let OTP = window.sessionStorage.getItem('OTP');
    if (OTP !== null) {


      //   let OTPtime = new Date(window.sessionStorage.getItem('OTPtime'));
      let Status = (window.sessionStorage.getItem('Status') == 'true');



      let currentTime = new Date();
      let Christmas = new Date(window.sessionStorage.getItem('OTPtime'));
      let diffMs = (+Christmas - +currentTime); // milliseconds between now & Christmas
      // let diffDays = Math.floor(diffMs / 86400000); // days
      // let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
      let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    


      if (Math.abs(diffMins) < 1) {
        if (Status === true) {
          if (OTP === verifyOTP) {
            this.verified.emit(false);
            //this.verificationSuccesfull = true;
            this.verificationSuccesfull.emit(true);
            this.verificationFailed.emit(false);
            sessionStorage.clear();
          } else {
            this.verified.emit(true);
            //this.verificationSuccesfull = false;
            this.verificationSuccesfull.emit(false);
            //this.verificationFailedMessage = 'OTP is incorrect !!';
            this.verificationFailedMessage.emit('OTP is incorrect !!');
            this.verificationFailed.emit(true);
          }
        } else {
          //this.verificationSuccesfull = false;
          this.verificationSuccesfull.emit(false);

          this.verificationFailedMessage.emit('Something wrong with system !!');
          this.verificationFailed.emit(true);
        }
      } else {
        sessionStorage.clear();
        //this.verificationSuccesfull = false;
        this.verificationSuccesfull.emit(false);
        this.verificationFailedMessage.emit('Generate OTP again !!');
        this.verificationFailed.emit(true);
      }
    } else {
      //this.verificationSuccesfull = false;
      this.verificationSuccesfull.emit(false);
      this.verificationFailedMessage.emit('Generate OTP again !!');
      this.verificationFailed.emit(true);
    }
  }
}
