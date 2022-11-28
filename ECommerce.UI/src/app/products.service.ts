import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProductsUrl: string = 'https://localhost:7078/Product/';

  constructor(private _httpClient: HttpClient) {}

  getProducts(product: string) {
    this._httpClient.get(this.getProductsUrl + product);
  }
}
