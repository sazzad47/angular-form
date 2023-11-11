import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { StepperService } from './stepper.service';
import { Step } from './step.model';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { DynamicChildLoaderDirective } from '../shared/directives/dynamic-child-loader.directive';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [BasicInfoComponent, DynamicChildLoaderDirective],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  currentStepIndex = 0;
  formComponentRef!: ComponentRef<any>;

  constructor(
    private stepperService: StepperService<any>,
  ) {}

  ngOnInit(): void {
    const steps: Step<any>[] = [
      { label: 'Basic information', component: BasicInfoComponent },
      { label: 'Additional data', component: BasicInfoComponent },
      { label: 'Edit article', component: BasicInfoComponent },
      { label: 'Sum', component: BasicInfoComponent },
      
    ];

    this.stepperService.setSteps(steps);
    this.loadFormComponent();
  }

  get steps(): Step<any>[] {
    return this.stepperService.getSteps();
  }

  get currentStep(): Step<any> {
    return this.steps[this.currentStepIndex];
  }

  loadFormComponent(): void {
    this.dynamicChild.viewContainerRef.clear();
    this.dynamicChild.viewContainerRef.createComponent(this.currentStep.component);
  }

  onNext(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.loadFormComponent();
    }
  }

  onBack(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.loadFormComponent();
    }
  }
}