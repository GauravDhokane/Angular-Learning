import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//ngIf Directives In Angular
/*
 we can apply if else using ngif
*/
export class App {
  show=true;
  login=false;
  val=0;
  Incre(){
    this.val++;
  }
}
