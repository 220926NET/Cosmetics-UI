import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { WishService } from './wish.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Wishlist } from '../models/wishlist';

describe('WishService', () => {
  let service: WishService;
  let httpMockController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMockController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockUser : User = new User(1, "First", "Last");

  it('should send POST request for new Wishlist', () => { 
    service.createWishlist(mockUser).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockUser);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/Wishlist/`);
    expect(req.request.method).toBe('POST');

    req.flush(mockUser);
    httpMockController.verify();
  });

  it('should send GET request for Wishlist with UserId', () => { 
    service.getWishlist(1).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toBeInstanceOf(Wishlist);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/api/Wishlist/userId/1`);
    expect(req.request.method).toBe('GET');

    httpMockController.verify();
  });

  it('should send POST request to add Product to Wishlist with WishlistId', () => { 
    service.addToWishlist(1, 1).subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toBeInstanceOf(Wishlist);
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/1/wishlistItem/1`);
    expect(req.request.method).toBe('POST');

    httpMockController.verify();
  });

  it('should send DELETE request for WishlistItem with DetailId', () => { 
    service.deleteFromWishlist(1).subscribe((res) =>{
      expect(res).toBeTruthy();
    })

    const req = httpMockController.expectOne(`${environment.baseUrl}/wishlistItem/1`);
    expect(req.request.method).toBe('DELETE');

    httpMockController.verify();
  });
});
