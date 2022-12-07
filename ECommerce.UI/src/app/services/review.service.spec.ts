import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ReviewService } from './review.service';
import { Review } from '../models/review';
import { User } from '../models/user';
import { Product } from '../models/product';

describe('ReviewService', () => {
  let service: ReviewService;
  let httpMockController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMockController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockUser : User = new User(97, "First", "Last");
  const mockProd : Product = new Product(1,97,"test","test","test",100, 2.99, "test", "test","test","test",0.00);
  const mockRev : Review = new Review(1,97,mockUser,1,mockProd,100,"test"); 

  it('should send GET request for Review with same ReviewId', () => { 
    service.getByReviewId(1).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockRev);
    })

    const req = httpMockController.expectOne(`${service.reviewUrl}/1?includeUser=false&includeProduct=false`);
    expect(req.request.method).toBe('GET');

    req.flush(mockRev);
    httpMockController.verify();
  });

  it('should send GET request for Reviews with same ProductId', () => {
    const mockedRes : Review[] = [mockRev, mockRev]; 

    service.getByProductId(1).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${service.reviewUrl}/product/1?includeUser=false&includeProduct=false`);
    expect(req.request.method).toBe('GET');

    req.flush(mockedRes);
    httpMockController.verify();
  });

  it('should send GET request for Reviews with same ApiId', () => {
    const mockedRes : Review[] = [mockRev, mockRev]; 

    service.getByApiId(1).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${service.reviewUrl}/apiId/1?includeUser=false&includeProduct=false`);
    expect(req.request.method).toBe('GET');

    req.flush(mockedRes);
    httpMockController.verify();
  });

  it('should send GET request for Reviews with same UserId', () => {
    const mockedRes : Review[] = [mockRev, mockRev]; 

    service.getByUserId(97).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${service.reviewUrl}/user/97?includeUser=false&includeProduct=false`);
    expect(req.request.method).toBe('GET');

    req.flush(mockedRes);
    httpMockController.verify();
  });

  it('should send POST request for new Review', () => { 
    service.createReview(mockRev).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockRev);
    })

    const req = httpMockController.expectOne(`${service.reviewUrl}`);
    expect(req.request.method).toBe('POST');

    req.flush(mockRev);
    httpMockController.verify();
  });
});
