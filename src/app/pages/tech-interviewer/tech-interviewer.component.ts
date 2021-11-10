import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-tech-interviewer',
  templateUrl: './tech-interviewer.component.html',
  styleUrls: ['./tech-interviewer.component.scss']
})
export class TechInterviewerComponent implements OnInit {

  selectedCandidate: Candidate

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

  onCandidateSelect(candidate: Candidate) {
    this.candidatesService.selectCandidate(candidate)
  }
}
