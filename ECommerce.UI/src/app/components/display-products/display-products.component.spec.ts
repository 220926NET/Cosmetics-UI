import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DisplayProductsComponent } from './display-products.component';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/models/ProductDetails/ProductDetails';
import { observable, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { compileNgModule } from '@angular/compiler';
import {By} from "@angular/platform-browser"

describe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;

  let mockProductList : ProductDetails[] = [new ProductDetails(1,97,"test","test", 100,"test", 2.99, "test", "test", ["test"])];
 
  const mockRes: Observable<ProductDetails[]> = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(mockProductList);
      subscriber.complete();
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[HttpClientModule],
      declarations: [ DisplayProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch product details', fakeAsync(()=> {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance; 
    let productService = fixture.debugElement.injector.get(ProductService);
    let spy = spyOn(productService, 'getProducts').and.returnValue(mockRes)
    fixture.detectChanges();
    tick();
    expect(component.products).toEqual(mockProductList);
  }))

  it('should render a sidebar', fakeAsync(()=> {
    const {debugElement} = fixture; 
    let productService = fixture.debugElement.injector.get(ProductService);
    let spy = spyOn(productService, 'getProducts').and.returnValue(mockRes)
    fixture.detectChanges();
    tick();
    const sidebar = debugElement.query(By.css('.sidebar'))
    expect(sidebar).toBeTruthy();
  }))

  it('should render a page-count', ()=> {
    let productDetailsCard = document.querySelector(".page-count");
    expect(productDetailsCard).toBeTruthy();

  })

  it('should render a product container', fakeAsync(()=> {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance; 
    let productService = fixture.debugElement.injector.get(ProductService);
    let spy = spyOn(productService, 'getProducts').and.returnValue(mockRes)
    fixture.detectChanges();
    tick();
    let productDetailsCard = document.querySelector(".container");
    expect(productDetailsCard).toBeTruthy();
  }))

  it('should render a product card', fakeAsync(()=> {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance; 
    let productService = fixture.debugElement.injector.get(ProductService);
    let spy = spyOn(productService, 'getProducts').and.returnValue(mockRes)
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    let productDetailsCard = document.querySelector(".cardListItem");
    expect(productDetailsCard).toBeTruthy();
  }))
});
