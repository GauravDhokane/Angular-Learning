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
//Directives In Angular
/*
 Directives is a class which adds additional behaviour to element in application
 provide more power to dom element
 if-else condition
 ngclass,ngfor,ngif
 component directives
 structural directives
 attribute directived
*/
export class App {

}
