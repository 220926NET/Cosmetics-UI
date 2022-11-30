import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProductsUrl: string =  environment.baseUrl + '/Product/';

  constructor(private _httpClient: HttpClient) {}

  getProducts(product: string) {
    this._httpClient.get(this.getProductsUrl + product);
  }
}
