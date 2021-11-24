import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/types/user';

@Component({
	selector: 'app-team-constructor',
	templateUrl: './team-constructor.component.html',
	styleUrls: ['./team-constructor.component.scss']
})
export class TeamConstructorComponent implements OnInit {

	toppings = new FormControl();

	allUsers: User[] = [];
	mentors: User[] = [];

	constructor(private usersServics: UsersService) { }

	getMentors() {
		this.usersServics.getMentors().subscribe(data => this.allUsers = data);
	}

	setNotify() {
		console.log()
	}

	ngOnInit(): void {
	}

}
