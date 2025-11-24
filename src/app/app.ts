import { Component, effect, signal, WritableSignal } from '@angular/core';
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
  Signal and its value are 2 diff things
  We can set the data type of signal as well as its value
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');

  data : WritableSignal<number|string> = signal<number|string>(10);// we set data type of both signal and its data

  updatesignal(){
    this.data.set("hello");

    //this.data.update((val)=>val+1)// this in 2nd method of updating signal but it has some limitations
  }

}
