import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseSuccessComponent } from './purchase-success.component';

describe('PurchaseSuccessComponent', () => {
  let component: PurchaseSuccessComponent;
  let fixture: ComponentFixture<PurchaseSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ PurchaseSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
