import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
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
  Computed Signals are read only signals, but updates when it depends on other signals
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');

  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y());

  updatesignal(){
    console.log(this.z());
    //this.z.set(200);->this will give error
    this.x.set(100);
    console.log(this.z());//here it updates value of z as value of x is updating
    // but if we use simple variable then value of z will nnot updates because addition has been done before
    //value change of x

  }

}
