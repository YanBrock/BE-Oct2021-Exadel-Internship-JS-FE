import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CandidatesService } from 'src/app/services/candidates.service';
import { selectSelectCandidate } from 'src/app/store/candidates/selectors';
import { Candidate } from 'src/app/types/candidate';
import { selectAllSkills } from '../../../store/directory/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manager-window',
  templateUrl: './manager-window.component.html',
  styleUrls: ['./manager-window.component.scss']
})
export class ManagerWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  softSkills$: Observable<any[]>;

  assessmentsRecruiter = {};

  assessmentsTech = {
    html: '',
    css: '',
    javaScript: '',
    comment: ''
  };

  selectedCandidate: any;
  transferCandidate: any;

  constructor(private store: Store, private candidatesService: CandidatesService) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.selectedCandidate$.subscribe(data => this.selectedCandidate = data);
    this.softSkills$ = this.store.select(selectAllSkills).pipe(
      map(skills => skills.filter(skill => skill.type === 0))
    )
  }

  ngOnInit(): void {
  }

  toTeam() {
    this.candidatesService.setSelectedCandidate(this.selectedCandidate);
  }

  onClick() {
    console.log(this.assessmentsRecruiter);
    console.log(this.assessmentsTech);

    this.assessmentsRecruiter = {}

    this.assessmentsTech = {
      html: '',
      css: '',
      javaScript: '',
      comment: ''
    }
  }

  onRecruiterFormChange(object) {
    this.assessmentsRecruiter = object
  }

  onFormChange(object) {
    this.assessmentsTech = object
  }
}
