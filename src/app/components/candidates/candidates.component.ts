import { UserLoginService } from 'src/app/services/user-login.service';
import { CandidatesFilter } from '../../types/candidate';
import { Candidate } from '../../types/candidate';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidatesService } from 'src/app/services/candidates.service';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  selectedCandidate: Candidate
  pageOfCandidates: Candidate[]
  activeUser: string
  startItem: number = 0
  pageItems: number = 7
  @ViewChild(CandidatesListComponent) list: CandidatesListComponent

  constructor(public candidatesService: CandidatesService, private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
    this.activeUser = this.userLoginService.activeUser.role
    if (this.activeUser === 'tech-interviewer') {
      this.candidatesService.candidatesList$.subscribe(response => this.pageOfCandidates = response.filter(c => c.isInterviewedByHr === true && !c.status).slice(this.startItem, this.pageItems))
    } else {
      this.candidatesService.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(this.startItem, this.pageItems))
    }
  }

  onCandidateSelect(candidate: Candidate) {
    this.candidatesService.selectCandidate(candidate)
  }

  onFilterChange(filterValue: CandidatesFilter) {
    this.list.dataSource.paginator.firstPage()
    this.candidatesService.loadCandidates(filterValue);
  }

  onPageChange(object) {
    const startIndex = object.pageIndex * object.pageSize;
    let length = 0;
    this.candidatesService.candidatesList$.subscribe(array => length = array.length);
    let endIndex = startIndex + object.pageSize;
    if (endIndex > length) {
      endIndex = length;
    }
    if (this.activeUser === 'tech-interviewer') {
      this.candidatesService.candidatesList$.subscribe(response => this.pageOfCandidates = response.filter(c => c.isInterviewedByHr === true && !c.status).slice(startIndex, endIndex))
    } else {
      this.candidatesService.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(startIndex, endIndex))
    }
  }

}
