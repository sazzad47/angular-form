// Importing necessary modules and decorators from Angular
import { Directive, ViewContainerRef } from '@angular/core';

// Angular Directive decorator
@Directive({
  // Directive selector
  selector: '[dynamicChildLoader]',

  // Setting standalone to true to encapsulate the directive
  standalone: true
})
export class DynamicChildLoaderDirective {
  // Constructor for injecting ViewContainerRef
  constructor(public viewContainerRef: ViewContainerRef) {}
}
