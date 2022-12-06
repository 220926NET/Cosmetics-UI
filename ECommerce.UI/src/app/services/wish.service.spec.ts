import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { WishService } from './wish.service';

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
});
