import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Routing In Angular
/*
  Mechanism of Going from one page to another page
  Check official website of Angular
*/
export class App {

}
