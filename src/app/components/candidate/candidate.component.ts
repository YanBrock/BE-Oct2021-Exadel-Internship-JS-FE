import { CandidatesService } from 'src/app/services/candidates.service';
import { Candidate } from './../../types/candidate';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate
  @Input() first: boolean
  selectedCandidate: Candidate

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(value => this.selectedCandidate = value);
  }

}
