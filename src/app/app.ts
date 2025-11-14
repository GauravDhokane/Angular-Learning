import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Interpolation
/*
  used to pass small data from TS file to html
  we can perform js operations and functions using interpolation
  Interpolation works only in templateUrl html file
  we can not declare variable , can not increment or decrement variables in interpolation
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  name="Gaurav";
  a=10;
  b=20;
}
