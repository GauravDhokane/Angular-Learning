import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Diff types of Event
/*
  Learn about event
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  count=0;
  handleeventfunccall(event:Event){//event:any also ok but should give actual eventname like MouseEvent
    //console.log("function called!!",event);// all info of event
    console.log("function called!!",event.type);//getting name of event
    console.log("function called",event.target);// getting btn on which click event occured
  }

}
