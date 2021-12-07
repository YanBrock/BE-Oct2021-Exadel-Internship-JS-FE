import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-recruiter-assessment',
  templateUrl: './recruiter-assessment.component.html',
  styleUrls: ['./recruiter-assessment.component.scss']
})
export class RecruiterAssessmentComponent implements OnInit {

  activeUser: string
  @Input() assessmentsRecruiter
  @Input() softSkills
  @Output() changingForm = new EventEmitter<object>()
  @Input() selectedCandidate: any

  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.activeUser = this.userLoginService.activeUser.role
  }

  onChange() {
    this.changingForm.emit(this.assessmentsRecruiter)
  }

}
