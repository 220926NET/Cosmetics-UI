import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent implements OnInit {

  isLeavingReview:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  leaveReview() {
    this.isLeavingReview=true;
  }

  cancelLeaveReview() {
    this.isLeavingReview=false;
  }

}
