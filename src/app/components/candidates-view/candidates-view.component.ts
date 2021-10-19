import { Candidate } from '../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidates-view',
  templateUrl: './candidates-view.component.html',
  styleUrls: ['./candidates-view.component.scss']
})
export class CandidatesViewComponent implements OnInit {

  candidates$: Observable<Candidate[]>;
  selectedCandidate: Candidate = null

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidates$ = this.candidatesService.getCandidates()
  }

  onCandidateSelect(candidate: Candidate) {
    this.selectedCandidate = candidate
    this.candidatesService.selectCandidate(candidate)
  }

}
