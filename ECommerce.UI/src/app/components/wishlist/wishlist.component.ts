import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/wishlist';
import { WishlistItem } from 'src/app/models/wishlistItem';
import { WishService } from 'src/app/services/wish.service';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  pageWishList : Wishlist = new Wishlist(0,0);
  loggedIn : boolean = false;
  //cart objects
  cartCount!: number;
  products: {
    product: Product;
    quantity: number;
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;
  
  constructor(private wish: WishService, private productService: ProductService) { }
  
  ngOnInit(): void {
    var userIdIfLoggedIn = sessionStorage.getItem('ID')
    if(userIdIfLoggedIn != null){
      this.loggedIn = true;
      let userIdToInt = parseInt(userIdIfLoggedIn);
      //currently when a user logs in through the login component session storage gets hard coded with a 2
      this.getUsersWishlist(userIdToInt);
    }
    //This is so that items can be added to cart
    this.subscription = this.productService.getCart().subscribe((cart) => {
      this.cartCount = cart.cartCount;
      this.products = cart.products;
      this.totalPrice = cart.totalPrice;
    });
    
  }
  
  getUsersWishlist(uId:number){
    this.wish.getWishlist(uId).subscribe((wl)=>{
      this.pageWishList.id = wl.id;
      this.pageWishList.userId = wl.userId;
      this.pageWishList.wishItems = wl.wishItems;
    })
  }

  addToWishCart(product: Product): void {
    let inCart = false;

    this.products.forEach((element) => {
      if (element.product == product) {
        ++element.quantity;
        let cart = {
          cartCount: this.cartCount + 1,
          products: this.products,
          totalPrice: this.totalPrice + product.price,
        };
        this.productService.setCart(cart);
        inCart = true;
        return;
      }
    });

    if (inCart == false) {
      let newProduct = {
        product: product,
        quantity: 1,
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + 1,
        products: this.products,
        totalPrice: this.totalPrice + product.price,
      };
      this.productService.setCart(cart);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeItemFromWishList(dId : number){
    this.wish.deleteFromWishlist(dId).subscribe(()=>{
      //reload wishlist to reflect change
      var userIdIfLoggedIn = sessionStorage.getItem('userId')
      if(userIdIfLoggedIn != null){
        let userIdToInt = parseInt(userIdIfLoggedIn);
        this.getUsersWishlist(userIdToInt);
      }

    });
  }
}
