import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

interface Cart {
  cartCount: number;
  products: {
    product: Product;
    quantity: number;
  }[];
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl: string = '/Product/';

  private _cart = new BehaviorSubject<Cart>({
    cartCount: 0,
    products: [],
    totalPrice: 0.0,
  });

  private _cart$ = this._cart.asObservable();

  getCart(): Observable<Cart> {
    return this._cart$;
  }

  setCart(latestValue: Cart) {
    return this._cart.next(latestValue);
  }

  constructor(private http: HttpClient) {}

  public getProducts(product: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + this.productUrl + product,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  public getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl + id);
  }

  public purchase(
    products: { id: number; quantity: number }[]
  ): Observable<any> {
    const payload = JSON.stringify(products);
    return this.http.patch<any>(
      environment.baseUrl + this.productUrl,
      payload,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }
}
