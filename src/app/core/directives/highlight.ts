import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // constructor for instanciation of classes
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#e5b39a');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
