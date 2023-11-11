import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { OutsideClickDirective } from './shared/directives/outside-click.directive';

interface Author {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule, OutsideClickDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
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

  isActive = false;
  selectedAuthor: Author | null = null;
  authorList: Author[] = [
    { name: 'Author 1', url: 'assets/images/author1.svg' },
    { name: 'Author 2', url: 'assets/images/author1.svg' },
  ];

  toggleActive() {
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }

  selectAuthor(author: any) {
    this.selectedAuthor = author;
    this.basicInfoForm.patchValue({ author: author.name }); 
    
  }

  handleSubmit() {
    console.warn(this.basicInfoForm.value)
  }

}
