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
  errorLogIn = 'p_error';

  userData = {
    email: '',
    password: ''
  }


  constructor(private loginService: UserLoginService) {}

  ngOnInit(): void {
  }

  submit(userForm: any) {
    console.log(this.userData);
    if (this.userData.password === this.loginService.user.password && this.userData.email === this.loginService.user.email) {
      console.log('User true:');
      this.errorLogIn = 'p_error';

    } else {
      console.log('User false:');
      this.errorLogIn = 'p_error activ';
    }
  }

}
