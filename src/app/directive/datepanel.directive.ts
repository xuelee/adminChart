import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[datePanel]' })
export class DatePanelDirective {
    constructor(el: ElementRef) {
       
       el.nativeElement.onblur = function () {
            console.log(12121);
       }
    }
}