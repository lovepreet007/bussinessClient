import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { Status, GenerateReportDetails } from '../reports/report.component.viewmodel'



@Injectable()
export class ReportService {

  constructor(private _http: Http) {
  }

  GenerateReport(reportDetails?: GenerateReportDetails): Observable<any> {
    let body = JSON.stringify(reportDetails);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:52793/api/order/GenerateReport', body, options).map(this.extractSearchItem).catch(this.handleError);
  }

  extractSearchItem(res: Response) {
    let body = <string[]>res.json();
    return body;
  }
  handleError(err: any) {
    return Observable.throw(err.statusText);
  }
}
