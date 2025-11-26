import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Contextual variable in for loop in angular
/*

*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  users=["gaurav","tata","bata","vinay","tony","sony","moni"];
}
