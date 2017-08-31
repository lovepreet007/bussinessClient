// import { Directive, HostListener, ElementRef, Renderer2, Self, forwardRef } from '@angular/core';
// import { NgModel } from '@angular/forms';
// import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
// import { LocaleService } from 'angular-l10n';

// @Directive({
//   selector: '[numberFormat]',
//   host: { '(input)': 'input($event.target.value)', '(blur)': 'blur()' },
//   // providers: [{
//   //   provide: NG_VALUE_ACCESSOR,
//   //   useExisting: forwardRef(() => NumberFormatDirective),
//   //   multi: true
//   // }]
// })
// export class NumberFormatDirective {
//   onChange = (_: any) => { };
//   onTouched = () => { };
//   constructor(private e1: ElementRef, private renderer: Renderer2, private ng: NgModel, public locale: LocaleService) {
//     debugger
//     this.element = e1
//     this.ngmodel = ng;
//   }
//   private element: ElementRef;
//   private ngmodel: NgModel;
//   text: string;

//   registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
//   registerOnTouched(fn: () => void): void { this.onTouched = fn; }

//   blur() {
//     debugger
//     this.onTouched();
//   }
//   // Parser: View --> Ctrl
//   input(value) {
//     debugger
//     // Write back to model
//     if (value) {
//       value = this.fromUser(value)
//     }

//     this.onChange(value);
//   }

//   // Formatter: Ctrl --> View
//   writeValue(value: any): void {
//     debugger
//     // Write to view
//     if (value) {
//       let values: any = this.listener(value);
//       return values;
//     }

//     var normalizedValue = (value) ? value : '';
//     this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);

//   }












//   hasMoneyMask: boolean = false;
//   isValuePasted: boolean = false;
//   $ths: any = this;



//   @HostListener('paste', ['$event']) onpaste() {
//     debugger
//     this.isValuePasted = true;
//   }
//   @HostListener('keypress', ['$event']) onkeypress(event: KeyboardEvent) {
//     debugger
//     this.text = this.element.nativeElement.value;
//     let transformedInput: string = !!this.text ? this.text.replace(/[^0-9.]/g, '') : '';
//     if (transformedInput.length > parseInt(this.format.split(',')[0]) && event.key != "-")
//       event.preventDefault();
//   }
//   format: string = this.element.nativeElement.getAttribute('numberFormat');
//   fraction: number = parseInt(this.format.split(',')[1]);
//   fromUser(text: string): string {
//     text = text.toString();
//     if (text) {
//       text = typeof text === 'number' ? text : text;
//       //  text = isValuePasted ? (Math.round(parseFloat(text) * 100) / 100).toString() : text;
//       this.hasMoneyMask = this.element.nativeElement.getAttribute('moneyMask') !== undefined;
//       let allowNegative: string = this.element.nativeElement.getAttribute('saAllowNegative');
//       let transformedInput: string;
//       let decimalValue: string = '';
//       let value: string = '';
//       let dotCount: number = 0;
//       let dashCount: number = 0;
//       if (!!text) {
//         decimalValue = text.split('.')[1];
//         value = text.split('.')[0];
//         dotCount = text.split('.').length - 1;
//         dashCount = text.split('-').length - 1;
//       }
//       if (allowNegative !== 'true') {
//         if (dotCount === 1) {
//           if (decimalValue.length > parseInt(this.format.split(',')[1])) {
//             transformedInput = text.substring(0, text.length - 1);
//           } else {
//             transformedInput = text.replace(/[^0-9.]/g, '');
//           }
//         } else if (dotCount === 2) {
//           transformedInput = text.substring(0, text.length - 1);
//         } else {
//           transformedInput = text.replace(/[^0-9]/g, '');
//         }
//         value = value.replace(/[^0-9]/g, '');
//         if (value.length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1]))) {
//           //  transformedInput = text.substring(0, text.length - 1);
//           if (!this.isValuePasted)
//             transformedInput = text.substring(0, text.length - 1);
//           else {
//             if (!!text) {
//               let pastedValue = text.replace(/[^0-9.]/g, '');
//               if (dotCount === 1) {
//                 if (pastedValue.split('.')[0].length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1])))
//                   transformedInput = '';
//               }
//               else {
//                 if ((!!text ? text.replace(/[^0-9.]/g, '') : '').length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1])))
//                   transformedInput = '';
//               }
//             }
//             else
//               transformedInput = text.substring(0, text.length - 1);
//           }
//         }
//       } else {
//         if (text[text.length - 1] === '-' && text.length === 1) {
//           transformedInput = text;
//         } else {
//           if (dotCount === 1) {
//             if (text[0] !== '-') {
//               transformedInput = text.replace(/[^0-9.]/g, '');
//             } else {
//               if (dashCount === 2) {
//                 transformedInput = text.substring(0, text.length - 1);
//               } else {
//                 transformedInput = text.replace(/[^0-9.-]/g, '');
//               }
//             }
//             if (decimalValue.length > parseInt(this.format.split(',')[1])) {
//               transformedInput = text.substring(0, text.length - 1);
//             }
//           } else if (dotCount === 2 || dashCount === 2) {
//             transformedInput = text.substring(0, text.length - 1);

//           } else {
//             if (text[0] !== '-') {
//               transformedInput = text.replace(/[^0-9]/g, '');
//               if (text.length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1]))) {
//                 transformedInput = text.substring(0, text.length - 1);
//               }
//             } else {
//               if (dashCount === 2) {
//                 transformedInput = text.substring(0, text.length - 1);
//               } else {
//                 transformedInput = text.replace(/[^0-9.-]/g, '');
//                 if (text.length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1]))) {
//                   transformedInput = text.substring(0, text.length - 1);
//                 }
//               }
//             }
//           }
//         }
//         if (this.isValuePasted) {
//           if (!!text) {
//             let pastedValue = text.replace(/[^0-9.]/g, '');
//             if (dotCount === 1) {
//               if (pastedValue.split('.')[0].length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1])))
//                 transformedInput = '';
//             }
//             else {
//               if ((!!text ? text.replace(/[^0-9.]/g, '') : '').length > (parseInt(this.format.split(',')[0]) - parseInt(this.format.split(',')[1])))
//                 transformedInput = '';
//             }
//           }
//         }
//       }
//       if (transformedInput !== text) {
//         if (text.indexOf('(') >= 0 && text.indexOf(')') >= 0)
//           transformedInput = '(' + transformedInput + ')';
//         this.renderer.setValue(this.element.nativeElement.value, transformedInput);
//         // ngModelCtrl.$setViewValue(transformedInput);
//         // ngModelCtrl.$render();
//         // this.element.nativeElement.value = transformedInput;
//       }

//       return transformedInput;

//     }
//     return text;
//   }
//   // formatter(value: any): any {
//   //   let values: any = this.listener(value);
//   //   return values;
//   // }
//   @HostListener('blur', ['$event']) onblur() {
//     debugger
//     this.element.nativeElement.value = this.listener(this.element.nativeElement.value);
//   }
//   // formatterFunction: () => any = (() => {
//   //   this.formatter(this.element.nativeElement.value);
//   // });

//   // ngModelCtrl.$formatters.push(formatter);
//   // ngModelCtrl.$parsers.push(fromUser);
//   //replaceRegex: RegExp = new RegExp(this.locale.getCurrentNumberingSystem(), 'g');
//   listener(val: any) {

//     // let modValue: string = !!ngModelCtrl.$modelValue ? ngModelCtrl.$modelValue.toString() : ngModelCtrl.$modelValue;
//     if (!!val && val.length > 0 && val[0] == '(') {
//       val = val.replace(/[^0-9.-]/g, '');
//       val = '-' + val;
//     }
//     let value: string = !!val ? val.replace('', '') : undefined;
//     if (!!value) {
//       var getValue = value.replace(/[^0-9.-]/g, '');
//       var i = this.$ths.$filter('number')(getValue, this.fraction);
//       value = value.replace('(', '');
//       if ((Number)(value) < 0) {
//         var j = i.replace('-', '');
//         return '(' + j + ')';
//       }
//       else
//         return i;
//     }
//     //else
//     // return $ths.$filter('number')(0, fraction);
//   }

//   //element.addClass('text-right');

// }
