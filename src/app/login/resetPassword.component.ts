import { Component, OnDestroy } from '@angular/core';
import { LoginService } from '../service/login.service'
import { ActivatedRoute, Router } from '@angular/router'
import { QuestionService } from '../dynamic/question.service';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ResetPassword, ResponseResult } from './login.component.viewmodel'
import { Message } from 'primeng/primeng';

@Component({
  selector: 'resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./login.component.css'],
  providers: [QuestionService]
})
export class ResetPasswordComponent implements OnDestroy {
  subscription: Subscription;
  questions: any[];
  form: FormGroup;
  reset: ResetPassword;
  resetPasswordMessage: Message[] = [];

  constructor(private _loginService: LoginService, private router: Router, private service: QuestionService, private sub: DynamicEmitterService) {

    this.questions = service.getResetPasswordPage();
  }
  ngOnInit() {
    this.subscription = this.sub.sunscribing
      .subscribe(item => {
        if ( !!item) {
           this.form = null;
          this.form = item;
          this.reset = this.InitializeResetDetails();
          this.reset.emailAddressVm = this.form.value.emailAddress;
          this.reset.oldPasswordVm = this.form.value.oldPassword;
          this.reset.newPasswordVm = this.form.value.newPassword;
          this.ResetPassword(this.reset);
        }

      });

  }
  LoginPage() {
    this.router.navigate(['login']);
  }
  ResetPassword(reset: ResetPassword) {
    this._loginService.ResetPassword(reset).subscribe(data => { this.ResetStatus(data) });
  }

  ResetStatus(data: ResponseResult) {

    if (!!data && data.status == 'OK') {
      let self = this;
      this.resetPasswordMessage.push({ severity: 'success', summary: data.message, detail: 'success' });
      setTimeout(function () {
        self.router.navigate(['login']);

      }, 1200);
    } else {
      this.resetPasswordMessage.push({ severity: 'error', summary: data.message, detail: 'failure' });
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
  public InitializeResetDetails(): ResetPassword {
    return {
      oldPasswordVm: '',
      emailAddressVm: '',
      newPasswordVm: ''
    }
  }

}

