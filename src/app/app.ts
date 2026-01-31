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



*/
export class App {
  userName="bruce";

  onuserchange(val:string){
   this.userName=val; 
  }
}
