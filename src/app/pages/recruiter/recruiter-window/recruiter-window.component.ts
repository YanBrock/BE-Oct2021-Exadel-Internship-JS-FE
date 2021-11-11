import { Candidate } from '../../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../../services/user-login.service';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  activeUser: string
  selectedCandidate: Candidate

  constructor(private candidatesService: CandidatesService, private userLoginSevice: UserLoginService) { }

  ngOnInit(): void {
    this.activeUser = this.userLoginSevice.activeUser.role
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  }

}
