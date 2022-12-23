import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.background = 'red';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.background = '';
  }

}
