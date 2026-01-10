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
//Dynamic styling
/*

*/
export class App {
  bgcolor="red";
  fontSize="30px";

  headingsizebig="80px";
  headingsizesmall="30px";
}
