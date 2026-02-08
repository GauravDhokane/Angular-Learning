import { Component , signal} from '@angular/core';
import { Product } from '../services/product';
import { Products } from '../services/productdatatype';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

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
