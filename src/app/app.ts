import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Forms in Angular
/*
  2 types of forms
  reactive and template driven forms-> check official website
  Simple type of forms - template driven
  complex type of forms and validations then reactive forms

*/
export class App {

}
