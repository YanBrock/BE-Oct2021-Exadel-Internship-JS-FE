import { Candidate } from './../../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  @Input() pageOfCandidates: Candidate[]
  @Input() candidates: Candidate[]
  @Input() selectedCandidate: Candidate
  @Output() selectCandidate = new EventEmitter<Candidate>()
  @Output() changePage = new EventEmitter<PageEvent>()
  @ViewChild (MatPaginator) paginator: MatPaginator
  dataSource

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.dataSource = this.candidates
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onClick(candidate: Candidate) {
    this.selectCandidate.emit(candidate)
  }

  onPageChange(event: PageEvent) {
    this.changePage.emit(event)   
  }

}
