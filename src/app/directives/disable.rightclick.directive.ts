import { Directive, HostListener } from '@angular/core';
//import { WindowService } from './window.service'

@Directive({
  selector: '[disableContextMenu]'
})
export class DisableContextMenu {

w:any;
  constructor() {
    // this.w =window;
    this.DisableRightClick();
  }

  DisableRightClick() {
    window.oncontextmenu = (event: Event): void => {

      event.preventDefault();
      event.stopPropagation();

    };
  }

}
