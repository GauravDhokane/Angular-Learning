import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//ForLoop in angular
/*
  widely used in many conditions and have default statement also
  but we need to pass variable for which we are checking the values
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  users=["gaurav","dhokane","bunty","tata"];

  students=[
    {name:"garry",age:29,email:"@garry.com"},
    {name:"suru",age:21,email:"@suru.com"},
    {name:"harry",age:24,email:"@harry.com"}
  ]

  GetName(val:string){
    console.log(val);
  }
}
