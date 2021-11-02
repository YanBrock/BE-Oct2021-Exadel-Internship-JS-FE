import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-header-user-name',
  templateUrl: './header-user-name.component.html',
  styleUrls: ['./header-user-name.component.scss'],
  providers: [ UserLoginService ],
})
export class HeaderUserNameComponent implements OnInit {

	title = "Invest in Your future";
	userTitle = "";

  constructor(private _userLoginService: UserLoginService) { }

  getActiveRole()
  {
	this.userTitle = this._userLoginService.activeUser.role;
	this.title = null;
  }

  ngOnInit(): void {
  }

}
