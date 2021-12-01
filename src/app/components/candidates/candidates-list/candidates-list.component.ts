import { Candidate } from '../../../types/candidate';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { selectCandidate } from '../../../store/candidates/actions';
import { Observable } from 'rxjs';
import { selectCandidatesList, selectSelectCandidate } from '../../../store/candidates/selectors';
import {CandidatesService} from '../../../services/candidates.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  candidatesList$: Observable<Candidate[]>;
  selectedCandidate$: Observable<Candidate>;
  @Input() pageOfCandidates: Candidate[];
  @Input() candidates: any;
  @Output() changePage = new EventEmitter<PageEvent>();
  @ViewChild (MatPaginator) paginator: MatPaginator;
  dataSource;
  xx

  constructor(private store: Store, private candidatesService: CandidatesService) {
    this.candidatesList$ = this.store.select(selectCandidatesList);
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
  }

  ngOnInit(): void {
    console.log(this.candidates)
    this.dataSource = this.candidatesList$;
    // this.candidatesList$.subscribe(candidates => {
    //   console.log(candidates);
    //   const x = '11'
    //   this.candidates = candidates;
    // });
    // console.log(xx)
    // this.xx = [...this.candidates, '11'];
    // console.log(this.xx)

    // const candidatesFromLocalStorage = this.candidatesService.getCandidateFromLocalStorage()[0];
    // console.log(candidatesFromLocalStorage);
    // this.candidatesList$.subscribe(data => {
    //   this.candidates = [...this.candidates, candidatesFromLocalStorage]
    // });
    console.log(this.candidates)
    // candidatesFromLocalStorage.forEach(candidate => this.candidates = [...this.candidates, candidate]);
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
