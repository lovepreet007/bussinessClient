import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service'
import { RegisterationVm } from './register.component.viewmodel'
import { ResponseResult } from '../login/login.component.viewmodel'
import { Message } from 'primeng/primeng';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']

})
export class RegistrationComponent {
  registration: RegisterationVm;
  registrationMessage: Message[] = [];
  constructor(private router: Router, private registrationService: RegisterService) { }
  ngOnInit() {
    this.registration = this.registrationService.InitiliazeRegister();
  }
  Registration() {
    this.registrationService.Registration(this.registration).subscribe(data => { this.RegistrationStatus(data); })
  }
  RegistrationStatus(data: ResponseResult) {
    if (!!data && data.status == 'OK') {
      let self = this;
      this.registrationMessage.push({ severity: 'success', summary: data.message, detail: 'Redirecting To Login Page' });
      setTimeout(function () {
        self.router.navigate(['login']);
      }, 1200);
    }else{
       this.registrationMessage.push({ severity: 'error', summary: data.message, detail: 'failure' });
    }
  }
  LoginPage(){
    this.router.navigate(['login']);
  }
}
