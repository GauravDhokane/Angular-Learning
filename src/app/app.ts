import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Passing data from parent to child component
/*
  Reuse component 
  @Input decorator is used to read the data in child component so need to check about that
  read all 

*/
export class App {
 users=['Anil','bunty','tata','bata','john'];
}
