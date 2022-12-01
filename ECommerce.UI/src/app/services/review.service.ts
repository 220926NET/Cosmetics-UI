import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewUrl:string = environment.baseUrl + "/review";

  constructor(private http: HttpClient) { }

  getByReviewId(reviewId:number, includeUser:boolean = false, includeProduct:boolean = false):Observable<Review> {
    let url:string = this.reviewUrl + "/" + reviewId.toString() + `?includeUser=${includeUser}&includeProduct=${includeProduct}`;
    return this.http.get<Review>(url);
  }

  getByProductId(productId:number, includeUser:boolean = false, includeProduct:boolean = false):Observable<Review[]> {
    let url:string = this.reviewUrl + "/product/" + productId.toString() + `?includeUser=${includeUser}&includeProduct=${includeProduct}`;
    return this.http.get<Review[]>(url);
  }

  getByUserId(userId:number, includeUser:boolean = false, includeProduct:boolean = false):Observable<Review[]> {
    let url:string = this.reviewUrl + "/user/" + userId.toString() + `?includeUser=${includeUser}&includeProduct=${includeProduct}`;
    return this.http.get<Review[]>(url);
  }
}
