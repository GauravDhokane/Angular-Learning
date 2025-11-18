import { Component, signal } from '@angular/core';
import { Login } from './login/login';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Counter app
/*
 Learning incremenr decrement and reset using function click
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  count=0;
  //Using 3 diff function
  // handleIncrement(){
  //   this.count=this.count+1;
  // }
  // resetfun(){
  //   this.count=0;
  // }
  // handledecrement(){
  //   if(this.count>0){
  //     this.count=this.count-1;
  //   }
  // }

  //using 1 function
  handlecounter(val:string){
    if(val=='minus')
    {
      if(this.count>0){
        this.count--;
      }
    }
    else if(val=='plus'){
      this.count++;
    }
    else{
      this.count=0;
    }
  }

}
