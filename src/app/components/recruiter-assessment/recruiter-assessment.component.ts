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

  constructor(private userLoginService: UserLoginService) {
    console.log(this.assessmentsRecruiter)

  }

  ngOnInit(): void {
    this.activeUser = this.userLoginService.activeUser.role
    console.log(this.softSkills)
    console.log(this.assessmentsRecruiter)
  }

  onChange() {
    this.changingForm.emit(this.assessmentsRecruiter)
  }

  handler(event, id) {

    return /^([0-4])$/.test(event.key) && !this.assessmentsRecruiter[id]
  }
}
