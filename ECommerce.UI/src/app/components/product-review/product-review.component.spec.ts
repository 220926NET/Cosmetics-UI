import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductReviewComponent } from './product-review.component';

describe('ProductReviewComponent', () => {
  let component: ProductReviewComponent;
  let fixture: ComponentFixture<ProductReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ ProductReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
