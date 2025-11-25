import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Effects in angular
/*
  Effects are declared in Constructor and it tell us when there is a change in value of signal
  it automatically called when there is change in value of signal
  We use the effect for letting us know that a signal has been updated! We generally write it inside
  the constructor so that it gets initialized when the component is created
  (the constructor runs only once), ensuring it starts tracking changes immediately.
  However, once initialized, the effect itself automatically re-executes whenever the signal
  gets updated, completely independent of the constructor—meaning it will keep
  reacting to changes regardless of where or how the signal updates!)
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');

  username=signal("Anil");
  display=false;
  count =signal(0);
  constructor(){
    effect(()=>{
      if(this.count()==2){
        this.display=true;
      }
      else{
        this.display=false;
      }
    })
  }

  updateCount(){
    this.count.set(this.count()+1);
  }
}
