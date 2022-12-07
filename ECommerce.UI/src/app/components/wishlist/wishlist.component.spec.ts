import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist.component';
import { WishService } from 'src/app/services/wish.service';
import { Wishlist } from 'src/app/models/wishlist';
import { Observable } from 'rxjs';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;
  let mockWishService: WishService;

  const mockWishlist : Wishlist = new Wishlist(1, 1);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ WishlistComponent ]
    })
    .compileComponents();

    mockWishService = TestBed.inject(WishService);
    spyOn(mockWishService, 'getWishlist').and.returnValue(new Observable((res) => {res.next(mockWishlist); res.complete();}));
    spyOn(mockWishService, 'deleteFromWishlist').and.returnValue(new Observable((res) => {res.next(); res.complete();}));
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expect Wishlist info for User', () => {
    component.getUsersWishlist(1);

    expect(component).toBeTruthy();
    expect(component.pageWishList).toEqual(mockWishlist);
  });

  it('should expect Wishlist to exist after item is removed', () => {
    component.removeItemFromWishList(1);

    expect(component).toBeTruthy();
  });
});
