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

	selectedMentors: any;

	selectedCandidates: any;

	mentors: User[] = this.usersServics.mentors;

	constructor(private usersServics: UsersService) { }

	setNotify(): void {
		console.log(this.selectedMentors);
	}

	ngOnInit(): void {
	}

}
