import { CommonModule, NgIf } from '@angular/common';
import { afterRenderEffect, Component, NgModule, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import {afterNextRender} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// API in Angular 
/*
  Application programming interface
  Interface in API
  Dynamic routing in angular with API
  


*/
export class App {

} 
