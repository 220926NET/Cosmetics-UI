import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/wishlist';
import { WishlistItem } from 'src/app/models/wishlistItem';
import { Product } from 'src/app/models/product';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  pageWishList : Wishlist = new Wishlist(0,0);
  
  constructor(private wish: WishService) { }
  
  ngOnInit(): void {
    var userIdIfLoggedIn = sessionStorage.getItem('userId')
    if(userIdIfLoggedIn == null){
      //route to login page
    }else{
      let userIdToInt = parseInt(userIdIfLoggedIn);
      //currently when a user logs in through the login component session storage gets hard coded with a 2
      this.getUsersWishlist(userIdToInt);
      
    }
    
  }
  
  getUsersWishlist(uId:number){
    this.wish.getWishlist(uId).subscribe((wl)=>{
      this.pageWishList.id = wl.id;
      this.pageWishList.userId = wl.userId;
      this.pageWishList.wishItems = wl.wishItems;
    })
  }
  
}

// testProduct1 = new Product(3, "fun mascara", 20, "The bestest most funnest mascara ever!",12.88, "https://m.media-amazon.com/images/I/71e5-Rxbp7L.jpg",'maybeline', ['#32323']);
// testProduct2 = new Product(4, "cool mascara", 20, "The coolest most sickest mascara ever!",12.88, "https://www.sephora.com/productimages/sku/s1143486-main-zoom.jpg", 'maybeline',["#derdsd"]);
// Item1 = new WishlistItem(1, 1, 3, this.testProduct1);
// Item2 = new WishlistItem(1,2,4, this.testProduct2); 
// testWishItems: WishlistItem[] = [];  