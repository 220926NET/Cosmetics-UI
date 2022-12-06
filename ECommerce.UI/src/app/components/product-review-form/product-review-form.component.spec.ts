import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductReviewFormComponent } from './product-review-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductReviewFormComponent', () => {
  let component: ProductReviewFormComponent;
  let fixture: ComponentFixture<ProductReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule ],
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
