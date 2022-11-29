import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Input() productId:number = 1;
  product:Product = {} as Product;

  reviews:Review[] = [];
  constructor(private reviewService:ReviewService, private productService:ProductService) { }

  ngOnInit(): void {
    this.reviewService.getByProductId(this.productId, true).subscribe(data => this.reviews = data);
    this.productService.getSingleProduct(1).subscribe(data => this.product = data);
    //this.productService.getSingleProduct(1).subscribe(data => console.log("Get product: ", data));
  }

}
