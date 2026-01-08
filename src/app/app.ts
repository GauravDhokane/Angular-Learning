import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [Login,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Two way binding
/*

*/
export class App {
  task="";
  tasklist:{id:number,task:string}[]=[];

  addTask(){
    this.tasklist.push({id:this.tasklist.length+1,task:this.task});
    this.task="";
    console.log(this.tasklist);
  }
  deletetask(index:number){
    this.tasklist.splice(index-1, 1);
    //splice() function taking 1st parameter as
    //index and 2nd parameter as no of elements to remove starting from that index
  }
}
