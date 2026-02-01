import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [User,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Pipes in angular
/*
  it is way of transforming data into another form 
  for pipes we need common module

  we have used multiple pipes and also 2 pipes for 1 thing 
  read about this imp

*/
export class App {
  title = "code step by step";
  date = new Date();
  amount = 10;
}
