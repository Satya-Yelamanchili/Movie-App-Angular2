import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseoverimage]'
})
export class MouseoverimageDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {}
  @HostListener('mouseover')
  onMouseenter() {
    this.mouse('hidden');
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.mouse('visible');
  }

  private mouse(dis: string) {
    this.renderer.setElementStyle(this.el.nativeElement.firstChild, 'visibility', dis);
  }

}
