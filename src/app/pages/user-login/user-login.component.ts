import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';


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
  validLogin = false;
  goUrl = '';


  userData = {
    email: '',
    password: '',
    role: '',
    token: 'bvdjjji439hgiiig55999999999999999'
  }

  constructor(private loginService: UserLoginService, private router: Router) { }

  ngOnInit(): void { }

  goPlaces(url) {
    this.router.navigate(url);
  }

  onFocus(userForm: any) {
    userForm.controls.input.value.length > 0 ?
      this.errorLogIn = 'p_error' :
      this.errorLogIn = 'p_error active';
  }

  submit(userForm: any) {
    console.log(this.loginService.users);

    if (userForm.controls.input.value.length < 1) {
      this.errorLogIn = 'p_error active';

    } else {
      this.errorLogIn = 'p_error';

      this.loginService.users.map(person => {
        if (person.email === this.userData.email && person.password === this.userData.password) {
          this.validLogin = true;
          this.userData.role = person.role;
          this.goUrl = person.role;
        }
      })

      if (this.validLogin) {
        this.errorLogInTwo = 'p_error';

        // this.loginService.saveDataUser(this.userData);
        this.goPlaces(['/', this.goUrl]);

      } else {
        this.errorLogInTwo = 'p_error two active';
      }

    }

  }

}
