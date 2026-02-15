import { CommonModule, NgIf } from '@angular/common';
import { afterRenderEffect, Component, NgModule, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import {afterNextRender} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { UserList } from './commponents/user-list/user-list';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// API getting in Angular using our own server
/*
  making server and giving object in db.json file
  to run the server --> npx json-server db.json
  getting a data using our own API 
  checking working of API using thunder client

  //POST API

  


*/
export class App {

} 
