import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import {loadCandidatesList} from '../../../store/candidates/actions';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  selected
  assessmentsRecruiter ={
    englishLevel: '',
    communicationSkills: '',
    abilityToListen: '',
    selfConfidence: ''
  }

  constructor(private store: Store) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
  }

  ngOnInit(): void {

  }

  onClick() {
    this.selectedCandidate$.subscribe(candidate => this.selected = candidate);
    this.selected = { ...this.selected, isInterviewedByHr: true, recruiterAssessments: this.assessmentsRecruiter};
    const c = JSON.parse(localStorage.getItem('Candidate'));
    console.log(c)
    localStorage.removeItem('Candidate');
    localStorage.setItem('Candidate', JSON.stringify(this.selected))
    console.log(this.selected)
    if (this.selected.firstName == c[0].firstName) {
      c[0] = this.selected
    }

    localStorage.setItem('Candidate', JSON.stringify(c))
    console.log(this.assessmentsRecruiter)
    console.log(this.selected)
    this.store.dispatch(loadCandidatesList(null))
    this.assessmentsRecruiter = {
      englishLevel: '',
      communicationSkills: '',
      abilityToListen: '',
      selfConfidence: ''
    }
    this.store.dispatch(loadCandidatesList(null))
  }

  onFormChange(object) {
    this.assessmentsRecruiter = object
  }

}
