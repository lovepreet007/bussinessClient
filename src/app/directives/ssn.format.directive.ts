import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ssnFormatDirective]'
})
export class SsnFormatDirective {

  value: string;
  eventExecuted: boolean = true;
  private element: ElementRef;
  constructor(private e1: ElementRef) {

    this.element = e1
  }



  // ctrl.$render = function () {
  //     value = ctrl.$viewValue;
  //     display();
  // };

  ngDoCheck() {
debugger
    if (this.eventExecuted) {
      if (!!this.element.nativeElement.value && this.element.nativeElement.value.length === 9) {
        this.value = this.element.nativeElement.value;
        this.display();
        this.eventExecuted = true;
      }
    }

  }

  @HostListener('blur', ['$event']) onblur() {
    this.value = this.element.nativeElement.value;
    this.display();
    this.eventExecuted = false;
  }

  @HostListener('paste', ['$event']) onpaste() {
    this.value = this.element.nativeElement.value;
    this.display();
    this.eventExecuted = false;
  }
  @HostListener('focus') onMouseLeave() {

    if (this.element.nativeElement.value != '' && this.element.nativeElement.value != undefined && this.element.nativeElement.value != null && this.element.nativeElement.value != '0')
      this.element.nativeElement.value = this.element.nativeElement.value.replace(/-/gi, '');
    this.eventExecuted = false;
    //this.display();
  }
  display() {
debugger
    if (this.value !== '' && this.value !== undefined && this.value !== null) {
      if (/^\d{3}-?\d{2}-?\d{4}$/) {
        this.value = this.value.replace(/-/gi, '');
      }
      if (new RegExp('^[0-9]{9}$').test(this.value.trim())) {
        //element.val(this.value.slice(0, 5) + '-' + this.value.slice(5, 9));
        this.element.nativeElement.value = this.value.slice(0, 3) +'-' + this.value.slice(3, 5) + '-' + this.value.slice(5, 9);
      } else if (new RegExp('^[0-9]{4}$').test(this.value.trim())) {
        this.element.nativeElement.value = 'XXX-XX-' + this.value;
      } else {
        this.clearField();
      }
    } else if (this.value === '') {
      this.clearField();
    }
  }
  clearField() {
    this.element.nativeElement.value = '';
  }
}







