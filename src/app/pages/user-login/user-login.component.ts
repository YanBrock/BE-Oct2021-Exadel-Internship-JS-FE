import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})

export class UserLoginComponent implements OnInit {
  hide = true;
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  errorLogIn = 'p_error';
  errorLogInTwo = 'p_error';
  isKeyRole = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  decoded: any;

  userData = {
    email: '',
    password: '',
    role: '',
    token: ''
  }

  constructor(private loginService: UserLoginService, private router: Router) { }

  ngOnInit(): void { }

  onFocus(userForm: any) {
    userForm.controls.input.value.length > 0 ?
      this.errorLogIn = 'p_error' :
      (this.errorLogIn = 'p_error active', this.errorLogInTwo = 'p_error');
  }

  submit(userForm: any) {
    if (userForm.controls.input.value.length < 1) {
      this.errorLogIn = 'p_error active';

    } else {
      this.errorLogIn = 'p_error';

      this.loginService.postData({ email: this.userData.email, password: this.userData.password })
        .subscribe(
          (data: any) => {

            this.decoded = jwt_decode(data.token);
            localStorage.setItem('authToken', data.token);

            this.userData.token = data.token;
            this.userData.role = this.decoded[this.isKeyRole];

            this.loginService.saveDataUser(this.userData);
            this.router.navigate(['/', this.decoded[this.isKeyRole]]);

          },
          error => {

            error.ok ?
              this.errorLogInTwo = 'p_error' :
              this.errorLogInTwo = 'p_error two active';

          }
        );
    }
  }
}
