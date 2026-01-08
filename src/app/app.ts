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
  two way binding is used for data binding between HTML and TS file
  two ways -> using ngmodule
           -> using function
  [(ngModel)] this is a import function that is used to make this binding
*/
export class App {
  name="";
}
