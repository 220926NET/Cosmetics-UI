import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  //productDTO list for calling purchase HTTP request 
  products: {
    product: Product,
    quantity: number
  }[] = [];
  totalPrice!: number;
  cartProducts: Product[] = [];

  

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getCart().subscribe(
      (cart) => {
        this.products = cart.products;
        this.products.forEach(
          (element) => {this.cartProducts.push(element.product)}
        );
        this.totalPrice = cart.totalPrice;
        console.log(cart.products)
      }
    );
  }

  emptyCart(): void {
    let cart = {
      cartCount: 0,
      products: [],
      totalPrice: 0.00
    };
    this.productService.setCart(cart);
    this.router.navigate(['/home']);
  }

}
