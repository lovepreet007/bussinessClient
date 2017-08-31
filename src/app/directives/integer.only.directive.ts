import { Directive, HostListener, ElementRef } from '@angular/core';
//import { WindowService } from './window.service'

@Directive({
  selector: '[integerOnly]'
})
export class IntegerOnlyDirective {

  public element: ElementRef;
  public value: string;
  constructor(private e1: ElementRef) {
    this.element = e1
  }

  @HostListener('keyup', ['$event']) oninput() {

    this.value = this.element.nativeElement.value;
    this.fromUser(this.value);
  }

  // this.w =window;
  fromUser(text: string) {

    if (text) {
      text = text.toString();
      var transformedInput = text.replace(/[^0-9]/, '');
      if (transformedInput !== text) {
        //ctrl.$setViewValue('');
        this.element.nativeElement.value = '';
        //ctrl.$render();
      }
      return transformedInput;
    }
    return undefined;

  }
}
