import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display error message when incorrect login', () => {
  //   component.badLogin = true;

  //   const bDe: DebugElement = fixture.debugElement;
  //   const bEl: HTMLElement = bDe.nativeElement;
  //   component.badLogin = true;
  //   const p = bEl.querySelector('.error')!;
  //   expect(bEl.textContent).toBeTruthy;
  // });
});
