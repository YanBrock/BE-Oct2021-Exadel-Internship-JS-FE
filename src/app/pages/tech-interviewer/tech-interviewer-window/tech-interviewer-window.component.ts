import { Candidate } from '../../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-interviewer-window',
  templateUrl: './tech-interviewer-window.component.html',
  styleUrls: ['./tech-interviewer-window.component.scss']
})
export class TechInterviewerWindowComponent implements OnInit {

  selectedCandidate: Candidate

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

}
