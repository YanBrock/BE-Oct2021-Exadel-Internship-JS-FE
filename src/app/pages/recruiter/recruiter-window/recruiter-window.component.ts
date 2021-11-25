import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectCandidate } from '../../../store/candidates/selectors';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
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
    console.log(this.assessmentsRecruiter)
    this.assessmentsRecruiter = {
      englishLevel: '',
      communicationSkills: '',
      abilityToListen: '',
      selfConfidence: ''
    }
  }

  onFormChange(object) {
    this.assessmentsRecruiter = object
  }

}
