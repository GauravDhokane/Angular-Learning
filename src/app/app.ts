import { Component, effect, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Signals in angular
/*
  Signal is a wrapper around a value that gives a signal when value changes
  signals are reactive and it gives call when value changes
  2 types
  writable and computable
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');

  count= signal(10);
  x=20;

  constructor(){
    effect(()=>{
      console.log(this.count());//this is the effect which tells us when the value of count has been changed
    })
  }
  updatevalue(){
    this.count.set(this.count()+1);//increment by 1
  }
}
