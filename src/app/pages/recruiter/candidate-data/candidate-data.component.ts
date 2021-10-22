import { Candidate } from './../../../types/candidate';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-data',
  templateUrl: './candidate-data.component.html',
  styleUrls: ['./candidate-data.component.scss']
})
export class CandidateDataComponent implements OnInit {

  @Input() candidate: Candidate

  constructor() { }

  ngOnInit(): void {
  }

}
