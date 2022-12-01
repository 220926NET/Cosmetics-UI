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

  productId:number = 0;
  product:Product = {} as Product;

  reviews:Review[] = [];
  constructor(
    private reviewService:ReviewService, 
    private productService:ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let idString:string|null = this.route.snapshot.paramMap.get('id');
    this.productId = parseInt(idString ? idString: '0');

    this.reviewService.getByProductId(this.productId, true).subscribe(data => this.reviews = data);
    this.productService.getSingleProduct(this.productId).subscribe(data => {
      this.product = data; 
      // Remove '\n' found in the product description
      this.product.description = this.product.description.replace(/\\n/g,' ');
    });
  }
}