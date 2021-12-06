import { Candidate } from '../../../types/candidate';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { selectCandidate } from '../../../store/candidates/actions';
import { Observable } from 'rxjs';
import { selectCandidatesList, selectSelectCandidate } from '../../../store/candidates/selectors';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  candidatesList$: Observable<Candidate[]>;
  selectedCandidate$: Observable<Candidate>;
  @Input() pageOfCandidates: Candidate[];
  @Input() candidates: Candidate[];
  @Output() changePage = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;

  constructor(private store: Store) {
    this.candidatesList$ = this.store.select(selectCandidatesList);
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    console.log(this.candidates)
  }

  ngOnInit(): void {
    this.dataSource = this.candidatesList$;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onClick(candidate: Candidate) {
    this.store.dispatch(selectCandidate({ selectedCandidate: candidate }));
  }

  onPageChange(event: PageEvent) {
    this.changePage.emit(event)
  }

}
