import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMockController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMockController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test Register function
  it('should send POST request to Register', () => {
    const mockedRes : number = 201;
    
    service.register("First", "Last", "email", "pass").subscribe((res) => {
      expect(res).toEqual(mockedRes);
    })

    let req = httpMockController.expectOne(`${service.authUrl}/Register`);
    expect(req.request.method).toBe('POST');

    req.flush(mockedRes);
    httpMockController.verify();
  })

  // Test Login function
  it('should send POST request to Login', () =>{
    const mockedRes : any = ["ID:1"];

    service.login("email", "password").subscribe((res) =>{
      expect(res).toBeTruthy();
      expect(res).toEqual(mockedRes);
    })

    const req = httpMockController.expectOne(`${service.authUrl}/Login`);
    expect(req.request.method).toBe('POST');


    req.flush(mockedRes);
    httpMockController.verify();
  });

  // Test Logout function
  // it('should send PUT request to Logout', () =>{
  //   service.logout();

  //   const req = httpMockController.expectOne(`${service.authUrl}/Logout`);
  //   expect(req.request.method).toBe('PUT');

  //   httpMockController.verify();
  // });
});
