import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//ngSwitch Directives In Angular
/*
 we can apply if else using ngif
*/
export class App {
  color="red";

  Changecolor(reqColor:string)
  {
    this.color=reqColor;
  }
}
