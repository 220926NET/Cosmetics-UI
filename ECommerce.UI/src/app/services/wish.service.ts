import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }

  
  public createWishlist(userInfo:User):Observable<any>{
    return this.http.post<any>(environment.baseUrl +"/Wishlist/",
    {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

  public getWishlist(userId:number):Observable<Wishlist>{
    return this.http.get<Wishlist>(
      environment.baseUrl + "/Wishlist/userId/" + userId,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }
  public addToWishlist(wishlistId:number,productId:number):Observable<any>{
    return this.http.post<any>(environment.baseUrl + "/" + wishlistId +"/wishlistItem/" + productId,
    {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }
 
  public deleteFromWishlist(detailId:number){
    return this.http.delete(environment.baseUrl+ "/wishlistItem/" + detailId,
    {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

}
