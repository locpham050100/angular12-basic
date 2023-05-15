import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLightDirective {
  @Input() appHightLight = 'blue';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('HighLightDirective', this.appHightLight);
    this.el.nativeElement.style.color = this.appHightLight;
  }
}
