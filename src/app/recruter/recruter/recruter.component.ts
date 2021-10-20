import { Component, Input, OnInit } from '@angular/core';
import { CandidateComponent } from 'src/app/components/candidate/candidate.component';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.scss']
})
export class RecruterComponent implements OnInit {


  @Input () Candidate: CandidateComponent;
  candidates: any;
  constructor(private candidateService: CandidatesService) { 
    
  }

  ngOnInit(): void {
      this.candidateService.getCandidates().subscribe(candidate => {
      this.candidates = candidate;
    })
    console.log(this.candidates)
  }

}
