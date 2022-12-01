import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ProductDetails } from '../models/ProductDetails/ProductDetails';

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

  public getProducts(product: string): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(
      environment.baseUrl + this.productUrl + product,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  public getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl + this.productUrl + 'id/' + id.toString());
  }

  public getProductsWithSameAPIId(apiId:number): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + this.productUrl + "apiId/" + apiId,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
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
