import { Candidate } from './../../types/candidate';
import { CandidatesService } from './../../services/candidates.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-data',
  templateUrl: './candidate-data.component.html',
  styleUrls: ['./candidate-data.component.scss']
})
export class CandidateDataComponent implements OnInit {

  @Input() selectedCandidate: Candidate
  

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    console.log(this.selectedCandidate)
    // this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

  onClick() {
    console.log(1)
    // console.log(this.selectedCandidate)
  }
}
