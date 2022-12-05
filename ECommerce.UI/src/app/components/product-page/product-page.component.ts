import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  apiId:number = 0;
  productList:Product[] = [];
  product:Product = {} as Product;
  quantity: number = 1;
  realPrice: number = 0.00;
  

  reviews:Review[] = [];
  constructor(
    private reviewService:ReviewService, 
    private productService:ProductService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.apiId = parseInt(this.route.snapshot.paramMap.get('apiid') ?? '0');
    
    this.productService.getProductsWithSameAPIId(this.apiId).subscribe(data => {
      this.productList = data; 
      console.log(this.productList);
      if (this.productList.length > 0) {
        this.product = this.productList[0];
        // Remove '\n' found in the product description
        this.product.description = this.product.description.replace(/\\n/g,' ');
      }
      this.realPrice = this.productList[0].price - (this.productList[0].price * (this.productList[0].discount ?? 0));
    });
    this.reviewService.getByApiId(this.apiId, true).subscribe(data => this.reviews = data);
  }

  public updateQuantity(e:any){
    this.quantity = e.target.value;
    console.log(this.quantity);
    this.updatePrice();
  }
  
  public updatePrice() {
    this.realPrice = (this.quantity * this.product.price) - (this.quantity * this.product.price * (this.product.discount ?? 0));
  }

  //call addtocart function
  public AddToCart(){
    this.productService.AddtoCartService( {product : this.product, quantity:this.quantity})
  }
}
