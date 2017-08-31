import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { SearchItem } from '../search/search.component.viewmodel'


@Injectable()
export class SearchService {

  constructor(private _http: Http) {
  }

  getSearchByFilterValues(value?: string): Observable<any> {

    //return this._http.get('assets/search/searchData.json').map(this.extractSearchItem).catch(this.handleError);
    return this._http.get('http://localhost:52793/api/order/FilterValues?filterValues=' + value).map(this.extractSearchItem).catch(this.handleError);
  }
  getFilterResult(): Observable<any> {
    return this._http.get('http://localhost:52793/api/order').map(this.extractFilters).catch(this.handleError);
  }
  getSearchResult(filterValue: string, searchValue: string, fromOrder?: boolean): Observable<any> {
    // window.sessionStorage.setItem('filterValue', filterValue);
    // window.sessionStorage.setItem('searchValue', searchValue);
    return this._http.get('http://localhost:52793/api/order/Search?filterId=' + filterValue + '&&searchItem=' + searchValue + '&&fromOrder=' + fromOrder).map(this.extractSearchValues).catch(this.handleError);
  }
  extractSearchItem(res: Response) {
   
    let body = <string[]>res.json();
    return body;
  }

  extractSearchValues(res: Response) {
    // let filterValue = window.sessionStorage.getItem('filterValue');
    // let searchValue = window.sessionStorage.getItem('searchValue');

    let body = <string[]>res.json();
    return body;
  }
  extractFilters(res: Response) {
    let body = res.json();
    return body;
  }
  handleError(err: any) {
    return Observable.throw(err.statusText);
  }
}
