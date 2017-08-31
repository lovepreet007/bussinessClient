import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { LoginDetails, ResponseResult,ResetPassword } from '../login/login.component.viewmodel'



@Injectable()
export class LoginService {

  constructor(private _http: Http) {
  }

  Login(loginDetails?: LoginDetails): Observable<ResponseResult> {
    let body = JSON.stringify(loginDetails);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:52793/api/Login/Login', body, options).map(this.extractDetails).catch(this.handleError);
  }
  SendEmail(email?: string): Observable<ResponseResult> {
    return this._http.get('http://localhost:52793/api/Login/ForgotPassword?email=' + email).map(this.extractDetails).catch(this.handleError);
  }
ResetPassword(reset?: ResetPassword): Observable<ResponseResult> {debugger
  let body = JSON.stringify(reset);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:52793/api/Login/ResetPassword', body, options).map(this.extractDetails).catch(this.handleError);
  }
  extractDetails(res: Response) {
  
    let body = res.json();
    return body;
  }
  handleError(err: any) {
    return Observable.throw(err.statusText);
  }
}
