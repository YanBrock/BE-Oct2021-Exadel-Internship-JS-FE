import { CandidatesFilter } from '../../types/candidate';
import { Candidate } from '../../types/candidate';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCandidatesList, selectCandidatesListLoading } from '../../store/candidates/selectors';
import { loadCandidatesList } from '../../store/candidates/actions';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidatesList$: Observable<Candidate[]>;
  candidatesListLoading$: Observable<boolean>
  pageOfCandidates: Candidate[]
  length: number
  activeUserRole: string
  startItem: number = 0
  pageItems: number = 7
  @ViewChild(CandidatesListComponent) list: CandidatesListComponent

  constructor(private store: Store, private userLoginService: UserLoginService) {
    this.candidatesList$ = this.store.select(selectCandidatesList);
    this.candidatesListLoading$ = this.store.select(selectCandidatesListLoading);
  }

  ngOnInit(): void {
    this.activeUserRole = this.userLoginService.activeUser.role;
    this.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(this.startItem, this.pageItems));
  }

  onFilterChange(filterValue: CandidatesFilter) {
    this.list.dataSource.paginator.firstPage();
    this.store.dispatch(loadCandidatesList({ filters: filterValue }));
  }

  onPageChange(object) {
    const startIndex = object.pageIndex * object.pageSize;
    this.candidatesList$.subscribe(array => this.length = array.length);
    let endIndex = startIndex + object.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }

    this.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(startIndex, endIndex))
  }

}
