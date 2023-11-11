// Importing necessary modules and decorators from Angular
import { Directive, EventEmitter, HostListener, Output, ElementRef } from '@angular/core';

// Angular Directive decorator
@Directive({
  // Directive selector
  selector: '[outsideClick]',

  // Setting standalone to true to encapsulate the directive
  standalone: true
})
export class OutsideClickDirective {
  // Event emitter for outside click events
  @Output()
  outsideClick: EventEmitter<MouseEvent> = new EventEmitter();

  // Host listener for handling mousedown events on the document
  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    // Checking if the clicked element is outside the directive's element
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.outsideClick.emit(event);
    }
  }

  // Constructor for injecting ElementRef
  constructor(private elementRef: ElementRef) {}
}
