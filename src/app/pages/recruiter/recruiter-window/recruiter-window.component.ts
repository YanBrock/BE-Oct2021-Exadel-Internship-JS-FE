import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import { selectAllSkills } from '../../../store/directory/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  softSkills$: Observable<any[]>;
  assessmentsRecruiter = {};

  constructor(private store: Store) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.softSkills$ = this.store.select(selectAllSkills).pipe(
      map(skills => skills.filter(skill => skill.type === 0))
    )
  }

  ngOnInit(): void {
  }

  onClick() {
    let id;
    this.selectedCandidate$.subscribe(candidate => id = candidate.id);
    const data = {
      dateOfInterview: new Date(),
      candidateID: id,
      marks: [],
      comment: this.assessmentsRecruiter['comment']
    }
    let result = []
    for (let key in this.assessmentsRecruiter) {
      if (key == 'comment') {
        continue;
      } else {
        result.push({skillID: key, skillLevel: this.assessmentsRecruiter[key]})
      }

    }
    data.marks.push(result)
    console.log(data)
    console.log(JSON.stringify(data))
    this.assessmentsRecruiter = {}
  }

  onRecruiterFormChange(object) {
    this.assessmentsRecruiter = object
  }

}
