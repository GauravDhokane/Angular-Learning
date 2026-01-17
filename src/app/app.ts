import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Basic reactive Forms in Angular
/*
  when we have to deal with complex forms then we need to check it
*/
export class App {

}
