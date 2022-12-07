import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card.component';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/models/ProductDetails/ProductDetails';
import { Product } from 'src/app/models/product';
import {  Observable } from 'rxjs';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  interface Cart {
    cartCount: number;
    products: {
      product: Product;
      quantity: number;
    }[];
    totalPrice: number;
  }

  let mockProduct : Product = new Product(1,97,"test","test","test", 100, 2.99,"test","test", "test", "test",100)
  let mockProductList : ProductDetails[] = [new ProductDetails(1,97,"test","test", 100,"test", 2.99, "test", "test", ["test"])]; 

  let mockCart : Cart = {
    cartCount: 0,
    products: [],
    totalPrice:0.0,
  };

  const mockCartRes : Observable<Cart> = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(mockCart);
      subscriber.complete();
    });
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add to cart', () => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    let productService = fixture.debugElement.injector.get(ProductService);
    let spy = spyOn(productService, 'getCart').and.returnValue(mockCartRes);
    fixture.detectChanges();
    component.addToCart(mockProduct)
  })


});
