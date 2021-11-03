import { CandidatesFilter } from './../../types/candidate';
import { Candidate } from '../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates$: Observable<Candidate[]>;
  selectedCandidate: Candidate

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
    // this.candidatesService.loadCandidates();
  }

  onCandidateSelect(candidate: Candidate) {
    this.candidatesService.selectCandidate(candidate)
  }

  onFilterChange(filterValue: CandidatesFilter) {
    this.candidatesService.loadCandidates(filterValue);
  }

}
