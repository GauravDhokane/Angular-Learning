import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'   // we can used this anywhere in app
})

export class Product {
  
  constructor(){
    console.log("product services")
  }
  getProductdata(){
    return[
      {name:'mobile',branch:'samsung',price:'2000'},
      {name:'mobile',branch:'moto',price:'10000'},
      {name:'mobile',branch:'apple',price:'50000'}
    ];
  }
}
