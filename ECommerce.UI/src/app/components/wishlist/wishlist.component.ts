import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/wishlist';
import { WishlistItem } from 'src/app/models/wishlistItem';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  testProduct1 = new Product(3, "fun mascara", 20, "The bestest most funnest mascara ever!",12.88, "https://m.media-amazon.com/images/I/71e5-Rxbp7L.jpg");
  testProduct2 = new Product(4, "cool mascara", 20, "The coolest most sickest mascara ever!",12.88, "https://www.sephora.com/productimages/sku/s1143486-main-zoom.jpg");



  Item1 = new WishlistItem(1, 1, 3, this.testProduct1);
  Item2 = new WishlistItem(1,2,4, this.testProduct2); 
  testWishItems: WishlistItem[] = [];  
  
   
  testWish = new Wishlist(1,1,this.testWishItems)
  
  

  constructor() { }

  ngOnInit(): void {
    this.testWishItems.push(this.Item1);
    this.testWishItems.push(this.Item2);
  }

}
