import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductReviewFormComponent } from './product-review-form.component';

describe('ProductReviewFormComponent', () => {
  let component: ProductReviewFormComponent;
  let fixture: ComponentFixture<ProductReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ ProductReviewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
