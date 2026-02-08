import { CommonModule, NgIf } from '@angular/common';
import { afterRenderEffect, Component, NgModule, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import {afterNextRender} from '@angular/core';
import { Product } from './services/product';
import { HttpClient } from '@angular/common/http';
import { Products } from './services/productdatatype';


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
  Interface in API
  when we are having bug object and in that we need to define datatype for that object so
  then we use interface


*/
export class App {
  productdata = signal<Products[]|undefined>(undefined);
  constructor(private productservice:Product){  

  }
  ngOnInit(){
    this.productservice.getProductdata().subscribe((data)=>{
      console.log(data);
      this.productdata.set(data.products)
    })
  }
} 
