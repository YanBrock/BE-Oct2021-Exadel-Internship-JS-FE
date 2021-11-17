import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import { selectSelectCandidate } from '../../../store/candidates/selectors';

@Component({
  selector: 'app-tech-interviewer-window',
  templateUrl: './tech-interviewer-window.component.html',
  styleUrls: ['./tech-interviewer-window.component.scss']
})
export class TechInterviewerWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  assessments = {
    html: '',
    css: '',
    javaScript: '',
    comment: ''
  }

  constructor(private store: Store) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
  }

  ngOnInit(): void {

  }

  onClick() {
    console.log(this.assessments)
    this.assessments = {
      html: '',
      css: '',
      javaScript: '',
      comment: ''
    }
  }

  onFormChange(object) {
    this.assessments = object
  }
}
