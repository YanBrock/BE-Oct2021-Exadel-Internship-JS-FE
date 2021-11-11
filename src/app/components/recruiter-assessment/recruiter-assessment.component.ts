import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../types/candidate';
import {UserLoginService} from '../../services/user-login.service';

@Component({
  selector: 'app-recruiter-assessment',
  templateUrl: './recruiter-assessment.component.html',
  styleUrls: ['./recruiter-assessment.component.scss']
})
export class RecruiterAssessmentComponent implements OnInit {

  @Input() selectedCandidate: Candidate
  activeUser: string

  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.activeUser = this.userLoginService.activeUser.role
  }

}
