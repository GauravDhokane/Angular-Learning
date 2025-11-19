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
  name="";
  displayname="";
  getName(event:Event){
    const val=(event.target as HTMLInputElement).value;
    this.name=val;
  }
  showName(){
    this.displayname=this.name;
  }
  setName(){
    this.name="Gaurav";
  }

  email="";
  displayemail="";
  getEmail(event:Event){
    const val=(event.target as HTMLInputElement).value;
    this.email=val;
  }
  showEmail(){
    this.displayemail=this.email;
  }
  setEmail(){
    this.email="Gaurav.dhokane@zoho.com";
  }
}
