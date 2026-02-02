import { CommonModule, NgIf } from '@angular/common';
import { afterRenderEffect, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user/user';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import {afterNextRender} from '@angular/core';
import { Product } from './services/product';


//below is known as Decorator ->@Component{}
@Component({
  selector: 'app-root',
  imports: [User,CommonModule,CurrencyConverterPipe,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// Services in Angular 
/*
  Services provides a way for you to separate angular app data and function that can be 
  used by multiple component in your app 
  here in the constructor we take var of service ad used that to  get data in this class only as it is private 
  also need to check service class also 
  

*/
export class App {

  productData:{  //  type of productData
    name: string;
    branch: string;
    price: string;
  }[] | undefined;
   
  constructor(private productservice:Product){  

  }
  getProductData(){
    this.productData = this.productservice.getProductdata();
    console.log(this.productData);
  }
  
}
