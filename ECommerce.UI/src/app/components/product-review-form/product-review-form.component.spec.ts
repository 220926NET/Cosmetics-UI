import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewFormComponent } from './product-review-form.component';

describe('ProductReviewFormComponent', () => {
  let component: ProductReviewFormComponent;
  let fixture: ComponentFixture<ProductReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
