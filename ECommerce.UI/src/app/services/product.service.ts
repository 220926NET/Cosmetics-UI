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

  /////// testing code //////
  product1 : Product = {
    id: 1,
    name: 'p1',
    brand: 'b',
    quantity: 1,
    price: 8.99,
    description: 'string',
    imageUrl: 'link of image',
    colorHexValues:['a','b']
  }
  /////////////////////////////

  private _cart = new BehaviorSubject<Cart>({
    cartCount: 0,
    products: [
       /////// testing code //////
      {product : this.product1, quantity : 8},
      {product : this.product1, quantity : 7}
      ///////////////////////////
    ],
    //testing
    totalPrice: this.product1.price//0.0,
    ///
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
