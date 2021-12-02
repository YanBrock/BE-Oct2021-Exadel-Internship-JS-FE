import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CandidatesService } from 'src/app/services/candidates.service';
import { selectSelectCandidate } from 'src/app/store/candidates/selectors';
import { Candidate } from 'src/app/types/candidate';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking

@Component({
	selector: 'app-admin-window',
	templateUrl: './admin-window.component.html',
	styleUrls: ['./admin-window.component.scss']
})
export class AdminWindowComponent implements OnInit {

	@ViewChild('calendar') calendarComponent: FullCalendarComponent;
	calendarOptions: CalendarOptions = {
		initialView: 'dayGridMonth'
	};

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

	selectedCandidate: any;
	transferCandidate: any;

	constructor(private store: Store, private candidatesService: CandidatesService) {
		this.selectedCandidate$ = this.store.select(selectSelectCandidate);
		this.selectedCandidate$.subscribe(data => this.selectedCandidate = data);
	}

	ngOnInit(): void {
	}

	toTeam() {
		this.candidatesService.setSelectedCandidate(this.selectedCandidate);
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

	someMethod() {
		let calendarApi = this.calendarComponent.getApi();
		calendarApi.next();
	}

}
