import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectCandidate } from 'src/app/store/candidates/selectors';
import { Candidate } from 'src/app/types/candidate';

@Component({
	selector: 'app-admin-window',
	templateUrl: './admin-window.component.html',
	styleUrls: ['./admin-window.component.scss']
})
export class AdminWindowComponent implements OnInit {

	selectedCandidate$: Observable<Candidate>;
	assessmentsRecruiter = {
		englishLevel: '',
		communicationSkills: '',
		abilityToListen: '',
		selfConfidence: ''
	}

	assessmentsTech = {
		html: '',
		css: '',
		javaScript: ''
	}

	constructor(private store: Store) {
		this.selectedCandidate$ = this.store.select(selectSelectCandidate);
	}

	ngOnInit(): void {

	}

	setNotice() {

	}

	onClick() {
		this.assessmentsRecruiter = {
			englishLevel: '',
			communicationSkills: '',
			abilityToListen: '',
			selfConfidence: ''
		}

		this.assessmentsTech = {
			html: '',
			css: '',
			javaScript: ''
		}
	}

	onFormChange(object) {
		this.assessmentsRecruiter = object
		this.assessmentsTech = object
	}

}
