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
  products:Product[] = [];

  reviews:Review[] = [];
  constructor(
    private reviewService:ReviewService, 
    private productService:ProductService,
    private route: ActivatedRoute
    ) { console.log('inside a product page!') }

  ngOnInit(): void {
    let idString:string|null = this.route.snapshot.paramMap.get('apiid');
    this.apiId = parseInt(idString ? idString: '0');
    console.log(`Got apiId of ${this.apiId}`);

    
    this.productService.getProductsWithSameAPIId(this.apiId).subscribe(data => {
      this.products = data; 
      console.log(`Got the following data ${JSON.stringify(data)}`);
      // Remove '\n' found in the product description
      this.products[0].description = this.products[0].description.replace(/\\n/g,' ');
      console.log(this.products[0]);
      this.reviewService.getByProductId(this.products[0].id, true).subscribe(data => this.reviews = data);
    });
    
    //do after product is loaded
    
  }
}
