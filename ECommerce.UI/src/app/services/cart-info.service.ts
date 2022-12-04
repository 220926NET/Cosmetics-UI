import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartInfoService {

  constructor() { }

  products: {
    product: Product,
    quantity: number
  }[] = [];

  public saveCartInfo(products: {product: Product,quantity: number}[]){
    this.products = products;
  }

  public showCartInfo(){
    console.log(this.products);
    return this.products;
  }
}
