import { CommonModule, NgIf } from '@angular/common';
import { afterRenderEffect, Component, NgModule, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import {afterNextRender} from '@angular/core';
import { Product } from './services/product';
import { HttpClient } from '@angular/common/http';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// API in Angular 
/*
  Application programming interface
  Calling API with services in angular got displaying data



*/
export class App {
  productdata:any=signal("");
  constructor(private productservice:Product){  

  }
  ngOnInit(){
    this.productservice.getProductdata().subscribe((data)=>{
      console.log(data);
      this.productdata.set(data.products)
    })
  }
}
