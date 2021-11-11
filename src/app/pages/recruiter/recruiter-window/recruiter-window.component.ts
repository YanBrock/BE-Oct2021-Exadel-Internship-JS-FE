import { Candidate } from '../../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  selectedCandidate: Candidate

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

}
