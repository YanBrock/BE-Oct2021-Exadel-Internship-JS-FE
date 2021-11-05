import { Component, Input, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-header-user-name',
  templateUrl: './header-user-name.component.html',
  styleUrls: ['./header-user-name.component.scss'],
})
export class HeaderUserNameComponent implements OnInit {

	title: string = "unknown user";
	userRoleClicked: boolean = false;

	constructor(private _userLoginService: UserLoginService) { }

	showFeatures()
	{
		if(this.userRoleClicked === false && this.title === "unknown user")
		{
			return;
		}
		else if(this.userRoleClicked === false)
		{
			this.userRoleClicked = true;
		}
		else if(this.userRoleClicked === true)
		{
			this.userRoleClicked = false;
		};
		
		console.log(this.userRoleClicked);
	};

	ngOnInit(): void 
	{
		this._userLoginService.userRole$.subscribe(role => 
		{
			if(role !== null)
			{
				this.title = role;
			}
		})
			
	};

}
