import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  const mockUser : User = new User(1, "First", "Last");

  beforeEach(() => {
    mockAuthService = TestBed.inject(AuthService);
    spyOn(mockAuthService, 'login').and.returnValue(new Observable((res) => {res.next(mockUser); res.complete();}));
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expect User info once user logs in', () => {
    component.onSubmit();
    expect(sessionStorage.getItem('ID')).toBeTruthy();
  });

  it('should exist after attempt to register', () => {
    component.register();
    expect(component).toBeTruthy();
  });
});
