import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReviewService} from 'src/app/services/review.service';
import { Review } from 'src/app/models/review';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent implements OnInit {
  reviewForm:FormGroup = {} as FormGroup;
  isLeavingReview:boolean = false;
  submitAttempted = false;

  constructor(private formBuilder:FormBuilder,
    private reviewService:ReviewService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      rating : [
        0,
        [ Validators.required, Validators.min(1), Validators.max(5)]
      ],
      text: [
        "",
        [ Validators.required, Validators.minLength(5), Validators.maxLength(1000)]
      ]
    });

    //this.reviewForm.valueChanges.subscribe(console.log);
  }

  leaveReview() {
    this.isLeavingReview=true;
  }

  cancelLeaveReview() {
    this.isLeavingReview=false;
  }

  submitReview() {
    alert(this.authService.loggedIn);
    this.submitAttempted = true;
    if (!this.reviewForm.invalid) {
      let review = {
        userId:0,
        productId:0,
        rating: this.rating?.value,
        text: this.text?.value
      }
      //this.reviewService.createReview(review);
    }

  }

  get rating() {
    return this.reviewForm.get("rating");
  }

  get text() {
    return this.reviewForm.get("text");
  }

  isLoggedIn():boolean {
    return (sessionStorage.getItem('ID') != null);
  } 

}
