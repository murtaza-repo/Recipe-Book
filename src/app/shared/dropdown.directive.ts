import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen(){
    const dropDownMenu = this.elementRef.nativeElement.childNodes[1];

    if(!dropDownMenu.classList.contains('show')){
        this.renderer.addClass(dropDownMenu, 'show');
    }else{
        this.renderer.removeClass(dropDownMenu, 'show');
    }
  }

}
