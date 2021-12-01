import { UserLoginService } from 'src/app/services/user-login.service';
import { CandidatesFilter } from '../../types/candidate';
import { Candidate } from '../../types/candidate';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidatesService } from 'src/app/services/candidates.service';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCandidatesList, selectCandidatesListLoading } from '../../store/candidates/selectors';
import { loadCandidatesList} from '../../store/candidates/actions';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidatesList$: Observable<Candidate[]>;
  candidatesListLoading$: Observable<boolean>
  pageOfCandidates: Candidate[]
  activeUser: string
  startItem: number = 0
  pageItems: number = 7
  candidates: any
  @ViewChild(CandidatesListComponent) list: CandidatesListComponent

  constructor(private store: Store, private candidatesService: CandidatesService, private userLoginService: UserLoginService) {
    this.candidatesList$ = this.store.select(selectCandidatesList);
    this.candidatesListLoading$ = this.store.select(selectCandidatesListLoading);
  }

  ngOnInit(): void {
    let candidatesFromLocalStorage;
    if (localStorage['Candidate']) {
      candidatesFromLocalStorage = this.candidatesService.getCandidateFromLocalStorage();
      console.log(candidatesFromLocalStorage)
      this.candidatesList$.subscribe(data => {
        this.candidates = [...data, ...candidatesFromLocalStorage]
      });
    } else {
      this.candidatesList$.subscribe(data => {
        this.candidates = data
      });
    }


    this.activeUser = this.userLoginService.activeUser.role;
    if (this.activeUser === 'techInterviewer') {
      this.pageOfCandidates = this.candidates.filter(c => c.isInterviewedByHr === true && !c.status).slice(this.startItem, this.pageItems);
      // this.candidatesList$.subscribe(response => this.pageOfCandidates = response.filter(c => c.isInterviewedByHr === true && !c.status).slice(this.startItem, this.pageItems))
    } else {
      // this.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(this.startItem, this.pageItems))
      console.log(this.candidates)
      this.pageOfCandidates = this.candidates.slice(this.startItem, this.pageItems)
    }
  }

  onFilterChange(filterValue: CandidatesFilter) {
    this.list.dataSource.paginator.firstPage();
    this.store.dispatch(loadCandidatesList({ filters: filterValue }));
  }

  onPageChange(object) {
    const startIndex = object.pageIndex * object.pageSize;
    let length = this.candidates.length;
    // this.candidatesList$.subscribe(array => length = array.length);
    let endIndex = startIndex + object.pageSize;
    if (endIndex > length) {
      endIndex = length;
    }
    if (this.activeUser === 'techInterviewer') {
      // this.candidatesList$.subscribe(response => this.pageOfCandidates = response.filter(c => c.isInterviewedByHr === true && !c.status).slice(startIndex, endIndex))
      this.pageOfCandidates = this.candidates.filter(c => c.isInterviewedByHr === true && !c.status).slice(startIndex, endIndex);
    } else {
      // this.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(startIndex, endIndex))
      this.pageOfCandidates = this.candidates.slice(startIndex, endIndex);
      console.log(this.pageOfCandidates)
    }
  }

}
