import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models/ProductDetails/ProductDetails';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: ProductDetails[] = [];

  productsToShow: ProductDetails[] = [];

  productCount = 6;

  page = 1; 

  // todo only display 6 products per page

  ngOnInit(): void {
    this.productService.getProducts('lipstick').subscribe((res) => {
      this.products = res;
      this.productsToShow = this.products.slice(0, 6);
     
     
    });
  }

  getSelectedProduct(product: string) {
    this.productService.getProducts(product).subscribe((res) => {
      this.products = res;
      this.productsToShow = this.products.slice(0, 6);
    });
  }

  IncrementProductCount() {
    this.productsToShow = this.products.slice(
      this.productCount,
      this.productCount + 6
    );
    this.productCount += 6;
    ++this.page; 
  }

  DecrementProductCount() {
    this.productCount -= 6;
    this.productsToShow = this.products.slice(
      this.productCount - 6,
      this.productCount
    );
    --this.page;
  }
}
