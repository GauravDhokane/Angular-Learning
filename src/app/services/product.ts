import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productAPIResponse } from './productdatatype';

@Injectable({
  providedIn: 'root'   // we can used this anywhere in app
})

export class Product {
  
  apiUrl ="https://dummyjson.com/products";
  constructor(private http:HttpClient){
    
  }
  getProductdata(){
    return this.http.get<productAPIResponse>(this.apiUrl);
  }
}
