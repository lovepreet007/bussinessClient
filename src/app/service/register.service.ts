import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { RegisterationVm } from '../registration/register.component.viewmodel'
import { ResponseResult } from '../login/login.component.viewmodel'


@Injectable()
export class RegisterService {

  constructor(private _http: Http) {
  }

  Registration(registrationDetails?: RegisterationVm): Observable<ResponseResult> {
    let body = JSON.stringify(registrationDetails);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:52793/api/Login/Registration', body, options).map(this.extractRegistrationDetails).catch(this.handleError);
  }

  extractRegistrationDetails(res: Response) {
debugger
    let body = res.json();
    return body;
  }
  handleError(err: any) {
    return Observable.throw(err.statusText);
  }

  public InitiliazeRegister(): RegisterationVm {
    return {
      userName: '',
      mobileNumber: '',
      email: '',
      newPassword: '',
      dob: '',
      gender: ''
    }
  }
}
