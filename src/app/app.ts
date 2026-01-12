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
// Pass data between pages in Angular
/*
  404 error and page not found error

*/
export class App {

}
