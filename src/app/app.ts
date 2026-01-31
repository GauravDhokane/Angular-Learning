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
// Passing data from child to parent component
/*
  How to pass date from child to parennt check all part and also check we have
  used 2 ways to pass data so 

*/
export class App {

  users:undefined|string[];
  handleUser(users:string[]){
    console.log(users);
    this.users=users;
  }
}
