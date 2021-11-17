import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../../types/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { UserLoginService } from '../../../services/user-login.service';


@Component({
  selector: 'app-mentor-window',
  templateUrl: './mentor-window.component.html',
  styleUrls: ['./mentor-window.component.scss']
})
export class MentorWindowComponent implements OnInit {


  selectedCandidate: Candidate;
  assessments = {
    englishLevel: '',
    communicationSkills: '',
    abilityToListen: '',
    selfConfidence: ''
  };

  constructor(private candidatesService: CandidatesService, private userLoginSevice: UserLoginService) { };

  ngOnInit(): void {
    this.candidatesService.selectedCandidate.subscribe(candidate => this.selectedCandidate = candidate)
  };

  onClick() {
    console.log(this.assessments)
    this.assessments = {
      englishLevel: '',
      communicationSkills: '',
      abilityToListen: '',
      selfConfidence: ''
    }
  };

  onFormChange(object) {
    this.assessments = object
  }
}
