import { Candidate } from '../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-candidates-view',
  templateUrl: './candidates-view.component.html',
  styleUrls: ['./candidates-view.component.scss']
})
export class CandidatesViewComponent implements OnInit {

  candidates$: Observable<Candidate[]>;

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    console.log('init')
    this.candidates$ = this.candidatesService.getCandidates()
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
