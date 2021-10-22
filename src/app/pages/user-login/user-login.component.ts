import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  hide = true;

  userData = {
    email: '',
    password: ''
  }

  user = {
    email: 'zzz@zzz.zzz',
    password: 'zzz'
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(userForm: any) {
    console.log(userForm.value)
  }

}
