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

  

  reviews:Review[] = [];
  constructor(
    private reviewService:ReviewService, 
    private productService:ProductService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
<<<<<<< HEAD
    let idString:string|null = this.route.snapshot.paramMap.get('apiid');
    this.apiId = parseInt(idString ? idString: '0');

    //checking products
    console.log(this.products);
=======
    this.apiId = parseInt(this.route.snapshot.paramMap.get('apiid') ?? '0');
>>>>>>> fb7d46cb2a41bdd48b5a6694c60b3090f642d786
    
    this.productService.getProductsWithSameAPIId(this.apiId).subscribe(data => {
      this.productList = data; 
      if (this.productList.length > 0) {
        this.product = this.productList[0];
        // Remove '\n' found in the product description
        this.product.description = this.product.description.replace(/\\n/g,' ');
      }
    });
<<<<<<< HEAD
    
    //do after product is loaded
    

=======
    this.reviewService.getByApiId(this.apiId, true).subscribe(data => this.reviews = data);
>>>>>>> fb7d46cb2a41bdd48b5a6694c60b3090f642d786
  }

  //need select specific product and its quantity

  

  //call addtocart function
  public AddToCart(){
    this.productService.AddtoCartService( {product : this.products[0], quantity:1})
  }


}
