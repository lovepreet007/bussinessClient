import { Component } from '@angular/core';

import { LoginDetails, ResponseResult } from './login.component.viewmodel'
import { LoginService } from '../service/login.service'
import { Message } from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./login.component.css']
})
export class ForgotPasswordComponent {

  email: string;
  sentEmailMessage: Message[] = [];
  constructor(private _loginService: LoginService, private router: Router) {
  }
  ngOnInit() {


  }
 LoginPage() {
    this.router.navigate(['login']);

  }
  public InitializeResponseLogin(): ResponseResult {
    return {
      status: '',
      message: ''
    }
  }

  ForgotPassowrd() {
    this._loginService.SendEmail(this.email).subscribe(data => { this.EmailSentStatus(data) });
  }

EmailSentStatus(data:ResponseResult){

  if (!!data && data.status == 'OK') {
    let self = this;
    this.sentEmailMessage.push({ severity: 'success', summary: data.message, detail: 'success' });
    setTimeout(function () {
      self.router.navigate(['login']);
    }, 1200);
  } else {

    let self = this;
     this.sentEmailMessage.push({ severity: 'error', summary: data.message, detail: 'failure' });
    setTimeout(function () {
      self.router.navigate(['login']);
    }, 1200);
  }
}

}
