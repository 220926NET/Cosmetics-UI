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
  totalPrice! : number;

  public saveCartInfo(products: {product: Product,quantity: number}[], totalPrice: number){
    this.products = products;
    this.totalPrice = totalPrice;
  }

  public showCartInfo(){
    console.log(this.products);
    return this.products;
  }

  public showTotalPrice(){
    return this.totalPrice;
  }
}
