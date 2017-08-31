import { Component, HostListener, Inject, OnInit, Directive } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[gridScroll]'
})
export class GridScrollDirective {


  constructor( @Inject(DOCUMENT) private document: Document) { debugger }

  @HostListener('window:scroll', ['$event'])
  onscroll($event) {
    debugger

    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

  }
}
