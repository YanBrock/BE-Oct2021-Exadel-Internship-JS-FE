import { Candidate } from './../../types/candidate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-data',
  templateUrl: './candidate-data.component.html',
  styleUrls: ['./candidate-data.component.scss']
})
export class CandidateDataComponent implements OnInit {

  @Input() selectedCandidate: Candidate
  

  constructor() { }

  ngOnInit(): void {

  }

}
