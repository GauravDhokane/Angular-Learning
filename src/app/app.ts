import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//if else in angular
/*

*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  display=true;
  show(){
    this.display=true;
  }
  hide(){
    this.display=false;
  }
  toggle(){
    this.display=!this.display;
  }

  display2=true;
  toggle2(){
    this.display2=!this.display2;
  }
}
