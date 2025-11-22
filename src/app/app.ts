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
  display=1;
  handlecolor(val:number){
    if(val==1)
    {
      this.display=1;
    }
    else if(val==2){
      this.display=2;
    }
    else if(val==3){
      this.display=3;
    }
    else {
      this.display=10;
    }
  }
}
