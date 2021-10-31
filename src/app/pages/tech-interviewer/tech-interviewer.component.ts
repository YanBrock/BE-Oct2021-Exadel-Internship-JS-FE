import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tech-interviewer',
  templateUrl: './tech-interviewer.component.html',
  styleUrls: ['./tech-interviewer.component.scss']
})
export class TechInterviewerComponent implements OnInit {

  candidates$: Observable<Candidate[]>;
  selectedCandidate: Candidate

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidates$ = this.candidatesService.getCandidates()
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

  onCandidateSelect(candidate: Candidate) {
    this.candidatesService.selectCandidate(candidate)

  }

  filterCandidatesWithStatus(filter: string) {
    if (filter === 'all') {
      this.candidates$ = this.candidatesService.getCandidates()
    } else {
      this.candidates$ = this.candidatesService.getCandidates().pipe(
        map(candidate => candidate.filter(candidate => candidate.status === filter))
      )
    }

  }

}
