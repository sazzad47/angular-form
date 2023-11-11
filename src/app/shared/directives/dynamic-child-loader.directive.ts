import { Directive, ViewContainerRef } from '@angular/core';
    
@Directive({
  selector: '[dynamicChildLoader]',
  standalone: true
})
export class DynamicChildLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}