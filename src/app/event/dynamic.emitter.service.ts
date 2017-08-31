import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx'
import { FormGroup } from '@angular/forms';


@Injectable()
export class DynamicEmitterService {
  item: FormGroup;
  value: string;
  private subject = new BehaviorSubject<FormGroup>(this.item);
  private sub = new BehaviorSubject<string>(this.value);
  // private subject = new Subject<any>();

  publish$(item: FormGroup) {
    this.subject.next(item);
  }
  stringpublish$(value: string) {
    this.sub.next(value);
  }
  sunscribing = this.subject.asObservable();
  subscrib = this.sub.asObservable();
}
