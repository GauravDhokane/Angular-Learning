import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Template driven forms in Angular
/*
  the froms which is completly controlled from HTML file only
  this is widely used for basic forms only not complexed
  //validations in template driven forms


*/
export class App {
  userdetails:any;

  adddetails(val:NgForm){
    console.log(val);
    this.userdetails = val;
  }
}
