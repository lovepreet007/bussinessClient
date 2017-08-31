import { Directive, HostListener, ElementRef, OnDestroy, Renderer } from '@angular/core';
//import { WindowService } from './window.service'
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[allowOnly]'
})
export class AllowOnlyDirective implements OnDestroy {

  public element: ElementRef;
  value: string;
  constructor(private e1: ElementRef, private render: Renderer) {
    this.element = e1
  }

  @HostListener('keypress', ['$event']) onkeypress(event: KeyboardEvent) {

    //this.ngModel.viewModel.pop();
    var charCode = !event.charCode ? event.which : event.charCode;
    // check for tab & backspace for Firefox:
    if ([0, 8].indexOf(charCode) !== -1) {

      return;
    }
    let allowables: string[] = this.element.nativeElement.getAttribute('allowOnly').split(' ');

    let elementVal = allowables.reduce((val: number[], part: string) => val.concat(this.getAllowables(part)), []);
    let cntrlval: string = this.element.nativeElement.value + event.key;
    if (!elementVal.some((code: number) => code === event.which)) {
      event.preventDefault();
    }
    if (this.element.nativeElement.value === '' && event.keyCode == 46) {
      event.preventDefault();
    }
    if (this.element.nativeElement.value != '' && (event.keyCode == 45 || event.keyCode == 46)) {
      if (this.element.nativeElement.value[this.element.nativeElement.value.lastIndexOf('.')] === event.key && this.element.nativeElement.value.indexOf('.') != -1) {
        event.preventDefault();
      }
    }
    // This works when number format is provided as attribute for control like numberformat="3,2"
    if (this.element.nativeElement.getAttribute('numberformat') != undefined) {
      let decimals: string[] = this.element.nativeElement.getAttribute('numberformat').split(',');
      if (cntrlval.indexOf('.') >= 0 && this.element.nativeElement.getAttribute('numberformat').indexOf(',') >= 0) {
        if (cntrlval.split('.')[0].length > Number(decimals[0]) || cntrlval.split('.')[1].length > Number(decimals[1])) {
          event.preventDefault();
        }
      }
      else {
        if (cntrlval.split('.')[0].length > Number(decimals[0])) {
          event.preventDefault();
        }
      }
    }
  }



  getAllowables(allowed: string): number[] {
    debugger
    switch (allowed) {
      case 'numbers': return this.getRange(48, 57);
      case 'characters': return this.getRange(65, 90).concat(this.getRange(97, 122));
      case 'uppercase': return this.getRange(65, 90);
      case 'lowercase': return this.getRange(97, 122);
      case 'spaces': return [32];
      case 'dots': return [46];
      case 'dashes': return [45];
      case 'commas': return [44];
      case 'underscore': return [95];
      case 'forwardSlash': return [47];
      default: return [];
    }
  }

  getRange(start: number, end: number): number[] {
    debugger
    let range: number[] = [];
    for (let i: number = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }

  // scope.$on('$destroy', () => {
  //     this.element.nativeElement.off('keypress');
  // });

  ngOnDestroy() {
    //                     document.removeEventListener('keyup', this.enter, false);
    // console.log("Removed event listener");
    this.element.nativeElement.off('keypress');
  }


  // This function allows only decimal numbers while pasting a copied value in text box.
  //TODO : update regex for 2 decimal point.






  @HostListener('paste', ['$event']) onpaste(event) {
    this.value = event.clipboardData.getData('Text');
    this.fromUser(this.value, event);
  }

  fromUser(text: string, event) {
    if (text) {
      var transformedInput = text.replace(/[^0-9.]/g, '');
      if (transformedInput !== text) {
        this.element.nativeElement.value = transformedInput;
        this.fromUser(transformedInput, event);

      }
      event.preventDefault();
      this.element.nativeElement.value = transformedInput;
      return;

    }
    this.element.nativeElement.value = '';
    return;
  }
}
