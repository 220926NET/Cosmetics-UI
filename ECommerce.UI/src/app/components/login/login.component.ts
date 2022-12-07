import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  })
  badLogin: boolean = false;
  incorrectMessage: string = "Invalid Login, Try Again";
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(
      (res) => {
        sessionStorage.setItem("ID", res['id'])
      },
      () => {
        if (!sessionStorage.getItem('ID')) {
          this.badLogin = true;
        }
        else  {
          this.authService.loggedIn=true;
          this.badLogin = false;
        }
      },
      //(err) => console.log(err),
      () => this.router.navigate(['home']),
    );
  }

  register(): void {
    this.router.navigate(['register']);
  }

}
