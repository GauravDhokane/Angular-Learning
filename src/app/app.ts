import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Data types in Angular
/*
  Properties and data types are 2 diff things
  Properties are the variables which we define in class where data type is the type of that properties
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');

  name="Gaurav";//by default angular decides data type of name as string
  num=10;//data type of num is number;
  data:string|boolean = "tata";//we can assign both type of values string as well as boolean to data
  data2:any = 20;// we can assign any type of data to data2

  updatevars(){
    //this.name=20;<- this will give error
    this.data2 = "tata";//it is accepting this
  }

  sum(a:number,b:number){//need to pass same type of data to call this function
    console.log(a+b);
  }
}
