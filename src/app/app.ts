import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Click Event on button
/*
  Click event on btn , for that we have made 2 function
  to make click event on that function, we need to pass that function
  as full fun name with parameters
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');

  handleClickEvent(){
    console.log("Button Clicked!!")
    this.handleClickEvent2();//We have to use this is want to call function from same class
  }
  handleClickEvent2(){
    console.log("2nd function called");
  }
}
