import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReviewService} from 'src/app/services/review.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent implements OnInit {
  reviewForm:FormGroup = {} as FormGroup;
  isLeavingReview:boolean = false;
  submitAttempted:boolean = false;
  submitAccepted:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private reviewService:ReviewService,
    private route: ActivatedRoute) { }

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
  }

  leaveReview() {
    this.isLeavingReview=true;
  }

  cancelLeaveReview() {
    this.isLeavingReview=false;
  }

  submitReview() {
    this.submitAttempted = true;
    if (!this.reviewForm.invalid && this.isLoggedIn() && !this.submitAccepted) {
      this.submitAccepted = true;
      let review = {
        userId: parseInt(sessionStorage.getItem('ID') ?? "0"),
        apiId: parseInt(this.route.snapshot.paramMap.get('apiid') ?? '0'),
        rating: parseInt(this.rating?.value),
        text: this.text?.value
      }
      this.reviewService.createReview(review).subscribe(data => {
        window.location.reload();
      });
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
