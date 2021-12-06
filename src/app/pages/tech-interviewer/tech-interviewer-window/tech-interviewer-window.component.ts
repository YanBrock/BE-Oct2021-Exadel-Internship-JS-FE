import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import {selectAllSkills} from '../../../store/directory/selectors';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tech-interviewer-window',
  templateUrl: './tech-interviewer-window.component.html',
  styleUrls: ['./tech-interviewer-window.component.scss']
})
export class TechInterviewerWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  softSkills$: Observable<any[]>;
  assessmentsTech = {
    html: '',
    css: '',
    javaScript: '',
    comment: ''
  };

  constructor(private store: Store) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.softSkills$ = this.store.select(selectAllSkills).pipe(
      map(skills => skills.filter(skill => skill.type === 0))
    )
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.assessmentsTech)
    this.assessmentsTech = {
      html: '',
      css: '',
      javaScript: '',
      comment: ''
    }
  }

  onFormChange(object) {
    this.assessmentsTech = object
  }
}
