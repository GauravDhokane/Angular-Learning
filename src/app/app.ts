import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Header in routing
/*
  Header in routing
  router link active option

*/
export class App {

}
