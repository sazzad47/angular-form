// Importing necessary modules and decorators from Angular
import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';

// Importing service and models
import { StepperService } from './stepper.service';
import { Step } from './step.model';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { DynamicChildLoaderDirective } from '../shared/directives/dynamic-child-loader.directive';
import { CommonModule } from '@angular/common';

// Angular Component decorator
@Component({
  // Component selector
  selector: 'app-stepper',

  // Setting standalone to true to encapsulate the component
  standalone: true,

  // Importing necessary components and directives
  imports: [CommonModule, BasicInfoComponent, DynamicChildLoaderDirective],

  // Component template and styles
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  // ViewChild decorator to access the DynamicChildLoaderDirective
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  // Variables for tracking the current step index and form component reference
  currentStepIndex = 0;
  formComponentRef!: ComponentRef<any>;

  // Constructor for injecting the StepperService
  constructor(private stepperService: StepperService<any>) {}

  // Lifecycle hook - OnInit
  ngOnInit(): void {
    // Array of steps representing the multi-step process
    const steps: Step<any>[] = [
      { label: 'Basic information', component: BasicInfoComponent },
      { label: 'Additional data', component: BasicInfoComponent },
      { label: 'Edit article', component: BasicInfoComponent },
      { label: 'Sum', component: BasicInfoComponent },
    ];

    // Setting the steps in the StepperService
    this.stepperService.setSteps(steps);

    // Loading the initial form component
    this.loadFormComponent();
  }

  // Getter for retrieving the steps
  get steps(): Step<any>[] {
    return this.stepperService.getSteps();
  }

  // Getter for retrieving the current step
  get currentStep(): Step<any> {
    return this.steps[this.currentStepIndex];
  }

  // Method to load the form component dynamically
  loadFormComponent(): void {
    this.dynamicChild.viewContainerRef.clear();
    this.dynamicChild.viewContainerRef.createComponent(this.currentStep.component);
  }

  // Method to navigate to the next step
  onNext(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.loadFormComponent();
    }
  }

  // Method to navigate to the previous step
  onBack(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.loadFormComponent();
    }
  }
}
