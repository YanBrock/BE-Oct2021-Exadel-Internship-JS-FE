import { CandidatesService } from 'src/app/services/candidates.service';
import { Candidate } from './../../types/candidate';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  @Input() candidates: Candidate[]
  @Output() selectCandidate = new EventEmitter<Candidate>()
  // selectedCandidate: Candidate

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    // this.candidatesService.selectedCandidate.subscribe(value => this.selectedCandidate = value);
  }

  // сделать так же с фильтрами
  onClick(candidate: Candidate) {
    this.selectCandidate.emit(candidate)
  }

}
