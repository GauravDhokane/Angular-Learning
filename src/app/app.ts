import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Switch in angular
/*
  widely used in many conditions and have default statement also
  but we need to pass variable for which we are checking the values
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  backcolor='red';

  handlecolor(val:string){
    this.backcolor=val;
  }

  handlecolorinput(event:Event){
    this.backcolor=(event.target as HTMLInputElement).value;
  }

}
