// Importing necessary modules and components from Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

// Importing custom directive for handling outside clicks
import { OutsideClickDirective } from '../shared/directives/outside-click.directive';

// Interface for defining Author structure
interface Author {
  name: string;
  url: string;
}

// Angular Component decorator
@Component({
  // Component selector
  selector: 'app-basic-info',

  // Setting standalone to true to encapsulate the component
  standalone: true,

  // Importing necessary modules
  imports: [CommonModule, ReactiveFormsModule, FormsModule, OutsideClickDirective],

  // Component template and styles
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  // Initializing a FormGroup for the basic information form
  basicInfoForm = new FormGroup({
    articleLang: new FormControl("english"),
    address: new FormControl(""),
    subtitle: new FormControl(""),
    metaTitle: new FormControl(""),
    metaDescription: new FormControl(""),
    coverImgTitle: new FormControl(""),
    author: new FormControl(""),
    articleType: new FormControl(""),
    articleDate: new FormControl(""),
    priority: new FormControl(""),
  })

  // State variable for tracking the active state of the author selection list
  isActive = false;

  // Variables for managing the selected author and the list of authors
  selectedAuthor: Author | null = null;
  authorList: Author[] = [
    { name: 'Author 1', url: 'assets/images/author1.svg' },
    { name: 'Author 2', url: 'assets/images/author1.svg' },
  ];

  // Method to toggle the active state of the author selection list
  toggleActive() {
    this.isActive = !this.isActive;
  }

  // Method to handle the selection of an author from the list
  selectAuthor(author: any) {
    this.selectedAuthor = author;
    this.basicInfoForm.patchValue({ author: author.name });

  }

  // Method to handle form submission
  handleSubmit() {
    console.warn(this.basicInfoForm.value);
  }
}
