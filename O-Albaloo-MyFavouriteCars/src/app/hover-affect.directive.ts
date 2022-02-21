import {Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() items: any ;
  constructor(private item : ElementRef) { 

  }
  // when mouse comes on the item
  @HostListener('mouseenter') onHover() {
    if(this.items == 'bodyStyle'){
      this.item.nativeElement.style.textDecoration= 'underline';
    }else if (this.items == 'tags'){
      this.item.nativeElement.style.fontWeight= 'bold';
    }

  }
  // when the mouse leaves the item/ element
  @HostListener('mouseleave') offHover() {
    if(this.items == 'bodyStyle'){
      this.item.nativeElement.style.textDecoration= 'none';
    }else if (this.items == 'tags'){

      this.item.nativeElement.style.fontWeight= 'normal';
    }

  }

}
