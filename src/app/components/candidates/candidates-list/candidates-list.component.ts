import { Candidate } from '../../../types/candidate';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import {Store} from '@ngrx/store';
import {selectCandidate} from '../../../store/candidates/actions';

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

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.dataSource = this.candidates
    // console.log(this.paginator)
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource)
  }

  onClick(candidate: Candidate) {
    // this.selectCandidate.emit(candidate)
    this.store.dispatch(selectCandidate(candidate))
  }

  onPageChange(event: PageEvent) {
    this.changePage.emit(event)
  }

}
