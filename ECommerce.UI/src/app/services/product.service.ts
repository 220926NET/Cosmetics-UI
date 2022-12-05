import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ProductDetails } from '../models/ProductDetails/ProductDetails';
import { CartComponent } from '../components/cart/cart.component';

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
  private purchaseURL: string = '/Purchase?userId='

  //testing _cart
  p1 : Product = {
    id: 1,
    //apiId?: number;
    name: 'n1',
    type: 't1',
    brand: 'b1',
   quantity: 1,
    price: 9.88,
    description: 'string',
    image: 'line'
    //colourName?:string;
    //hexValue?:string;
    //discount?: number;
  }
  

  private _cart = new BehaviorSubject<Cart>({
    cartCount: 0,
    products: [],

    totalPrice:0.0,

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
      environment.baseUrl + this.productUrl + "apiId/" + apiId.toString(),
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  // public purchase(
  //   products: { id: number; quantity: number }[]
  // ): Observable<any> {
  //   const payload = JSON.stringify(products);
  //   return this.http.put<any>(
  //     environment.baseUrl + this.productUrl,
  //     payload,
  //     {
  //       headers: environment.headers,
  //       withCredentials: environment.withCredentials,
  //     }
  //   );
  // }

  public purchase(products: { id: number; quantity: number }[]):Observable<any>{
    //const payload = JSON.stringify(products);
    const userId = sessionStorage.getItem('ID');
    return this.http.put<any>(
          //environment.baseUrl + this.productUrl,
          environment.baseUrl + this.purchaseURL + userId?.toString(),
          //`https://localhost:7078/Purchase?userId=${userId}`,
          products,
          {
            headers: environment.headers,
            withCredentials: environment.withCredentials,
          }
        );
  }


 

  //creat productlist
  // public AddtoList(productList:{product:Product;quantity:number}){
  //   let cart
  // }

  //add productlist to cart
  public AddtoCartService( productList:{product:Product;quantity:number} ){
    
    let cart : Cart = {cartCount: this._cart.getValue().cartCount+1, products :this._cart.getValue().products, totalPrice:this._cart.getValue().totalPrice+(productList.product.price*productList.quantity) }
    console.log(cart.cartCount);
    cart.products.push(productList)
    this._cart.next(cart);
    console.log(this._cart);
    //console.log(this._cart)
    //console.log(this._cart.getValue().cartCount);
  }
}  
