import { Component, signal } from '@angular/core';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
//Components
/*
  Fundamental building block of webpage
  ng g c login ->command to make component
  It can be used fot multiple times in webpage
  For calling it in html file, we need to use selector name in tag in parent component html file
  and we need to import the component
*/
export class App {
  protected readonly title = signal('Angular-1st-Project');
  name="Gaurav";
  a=10;
  b=20;
}
