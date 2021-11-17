import { Candidate } from '../../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../../services/user-login.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectCandidate} from '../../../store/candidates/actions';
import {selectCandidatesList, selectSelectCandidate} from '../../../store/candidates/selectors';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  selectedCandidate: Candidate
  // selectedCandidate$: Observable<Candidate>;

  assessments ={
    englishLevel: '',
    communicationSkills: '',
    abilityToListen: '',
    selfConfidence: ''
  }

  constructor(private candidatesService: CandidatesService, private userLoginSevice: UserLoginService, private store: Store) {
    // this.selectedCandidate$ = this.store.select(selectSelectCandidate);
  }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

  onClick() {
    console.log(this.assessments)
    this.assessments = {
      englishLevel: '',
      communicationSkills: '',
      abilityToListen: '',
      selfConfidence: ''
    }
  }

  onFormChange(object) {
    this.assessments = object
  }

}
