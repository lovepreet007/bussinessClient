import { Component } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { LoginDetails, ResponseResult } from './login.component.viewmodel'
import { LoginService } from '../service/login.service'
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: LoginDetails;
  constructor(private _loginService: LoginService, private router: Router) {
  }
  ngOnInit() {

    this.login = this.InitializeLoginDetails();
  }
  public InitializeLoginDetails(): LoginDetails {
    return {
      username: '',
      password: '',
      tempPassword: ''
    }
  }
  public InitializeResponseLogin(): ResponseResult {
    return {
      status: '',
      message: ''
    }
  }

  public ResetPassword() {
    this.router.navigate(['resetPassword']);
  }
  Login() {
    this._loginService.Login(this.login).subscribe(data => { this.LoginStatus(data) });
  }
  ForgotPassowrd() {
    this.router.navigate(['forgotPassword']);

  }
  Register() {

    this.router.navigate(['register']);
  }
  LoginStatus(data: ResponseResult) {
    if (!!data && data.status == 'OK') {
      sessionStorage.setItem('currentUser', 'currently loggin');
      // localStorage.setItem('currentUser', 'currently loggin');
      this.router.navigate(['home']);
    }
  }
}
