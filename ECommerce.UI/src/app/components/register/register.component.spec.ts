import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuthService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mockAuthService = TestBed.inject(AuthService);
    spyOn(mockAuthService, 'register').and.returnValue(new Observable((res) => {res.next(); res.complete();}));
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist after attempt to register', () => {
    component.onSubmit();
    expect(component).toBeTruthy();
  });
});
