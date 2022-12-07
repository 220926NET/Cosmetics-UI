import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ProductService } from './product.service';
import { ProductDetails } from '../models/ProductDetails/ProductDetails';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let httpMockController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMockController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Cart as Observable', () => {
    expect(service.getCart()).toBeInstanceOf;
  });
  


  it('should send GET request for Products', () => {
    const mockedRes : ProductDetails[] = [new ProductDetails(1,97,"test","test", 100,"test", 2.99, "test", "test", ["test"])]; 

    service.getProducts("test").subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/Product/test`);
    expect(req.request.method).toBe('GET');


    req.flush(mockedRes);
    httpMockController.verify();
  });

  it('should send GET request for single Product', () => {
    const mockedRes : Product = new Product(1,97,"test","test","test",100, 2.99, "test", "test","test","test",0.00); 

    service.getSingleProduct(1).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/Product/id/1`);
    expect(req.request.method).toBe('GET');


    req.flush(mockedRes);
    httpMockController.verify();
  });

  it('should send GET request for Products with same ApiId', () => {
    const mockedRes : Product[] = [new Product(1,97,"test","test","test",100, 2.99, "test", "test","test","test",0.00)]; 

    service.getProductsWithSameAPIId(97).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/Product/apiId/97`);
    expect(req.request.method).toBe('GET');


    req.flush(mockedRes);
    httpMockController.verify();
  });

  it('should send PUT request to Purchase Product(s) by User with UserId', () => {
    const products: {id: number, quantity: number}[] = [];
    sessionStorage.setItem("ID", '2');

    service.purchase(products).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(products);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/Purchase?userId=2`);
    expect(req.request.method).toBe('PUT');


    req.flush(products);
    sessionStorage.clear();
    httpMockController.verify();
  });
});
