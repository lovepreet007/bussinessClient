import { Directive, ElementRef, HostListener, HostBinding, DoCheck } from '@angular/core';

@Directive({
  selector: '[zipformatdirective]'
})
export class ZipFormatDirective implements DoCheck {
  value: string;
  eventExecuted: boolean = true;
  public element: ElementRef;
  constructor(private e1: ElementRef) {
    this.element = e1
  }
  ngDoCheck() {

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
    this.element.nativeElement.value = this.element.nativeElement.value.replace(/-/gi, '');
    this.eventExecuted = false;
  }
  display() {
    if (this.value !== '' && this.value !== undefined && this.value !== null && this.value != "0") {
      if (/^\d{5}-?\d{4}$/) {
        this.value = this.value.replace(/-/gi, '');
      }
      if (new RegExp('^[0-9]{9}$').test(this.value.trim())) {
        //element.val(this.value.slice(0, 5) + '-' + this.value.slice(5, 9));
        this.element.nativeElement.value = this.value.slice(0, 5) + '-' + this.value.slice(5, 9);
      }
      else if (new RegExp('^[0-9]{5}$').test(this.value.trim())) {
        this.element.nativeElement.value = this.value;
      }
      else {
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







