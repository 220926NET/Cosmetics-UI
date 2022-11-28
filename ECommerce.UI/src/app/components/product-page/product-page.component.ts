import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Input() productId:number = 1;

  reviews:Review[] = [];
  constructor(private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getByProductId(this.productId, true).subscribe(data => this.reviews = data);
  }

}
