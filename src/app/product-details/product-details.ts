import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';
import { Products } from '../services/productdatatype';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {

  productdata = signal<Products | undefined>(undefined);

  constructor(private route:ActivatedRoute,private products:Product){

  }
  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);

    this.products.getProductdata().subscribe((data)=>{
      console.log(data.products);
      data.products.filter((item)=>{
        if(item.id.toString()==productId){
          console.log(item);
          this.productdata.set(item);
        }
      })
    })
  }
}
