import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
elref = inject(ElementRef)

constructor() { 
 // this.elref.nativeElement.style.backgroundColor = 'yellow'
}

@Input()
appHighlight =''

@Input()
defaultColor =''



  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlight(this.appHighlight||this.defaultColor||'red')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight('')
  }

  highlight(color:string){
    this.elref.nativeElement.style.backgroundColor = color
  }

}
