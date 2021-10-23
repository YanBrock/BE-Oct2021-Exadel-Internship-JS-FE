import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [UserLoginService]
})

export class UserLoginComponent implements OnInit {
  hide = true;
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  errorLogIn = 'p_error';
  errorLogInTwo = 'p_error';

  userData = {
    email: '',
    password: ''
  }

  constructor(private loginService: UserLoginService) { }

  ngOnInit(): void {
  }

  onFocus(userForm: any) {
    userForm.controls.input.value.length > 0 ?
      this.errorLogIn = 'p_error' :
      this.errorLogIn = 'p_error active';
  }


  submit(userForm: any) {

    if (userForm.controls.input.value.length < 1) {
      this.errorLogIn = 'p_error active';

    } else {
      this.errorLogIn = 'p_error';
      if (this.userData.password === this.loginService.user.password && this.userData.email === this.loginService.user.email) {
        this.errorLogInTwo = 'p_error';
        console.log('You are logged in');

      } else {
        console.log('User false:');
        this.errorLogInTwo = 'p_error two active';

      }
    }
  }
}
