import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Step } from './step.model';

@Injectable({
  providedIn: 'root',
})
export class StepperService<T> {
  private stepsSubject = new BehaviorSubject<Step<T>[]>([]);
  steps$: Observable<Step<T>[]> = this.stepsSubject.asObservable();

  setSteps(steps: Step<T>[]): void {
    this.stepsSubject.next(steps);
  }

  getSteps(): Step<T>[] {
    return this.stepsSubject.value;
  }
}