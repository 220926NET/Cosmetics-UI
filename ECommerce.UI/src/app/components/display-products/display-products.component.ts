import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

  productsToShow: Product[] = [];

  productCount = 6;
  // todo only display 6 products per page

  ngOnInit(): void {
    this.productService.getProducts('lipstick').subscribe((res) => {
      console.log(res);
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

    console.log(this.productsToShow);
  }

  DecrementProductCount() {
    this.productCount -= 6;
    console.log('product count start is ' + (this.productCount - 6));
    this.productsToShow = this.products.slice(
      this.productCount - 6,
      this.productCount
    );
  }
}
