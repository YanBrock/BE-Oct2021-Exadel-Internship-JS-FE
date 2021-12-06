import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';
import { Candidate } from 'src/app/types/candidate';
import { CandidatesService } from '../../../services/candidates.service'
@Component({
  selector: 'app-mentor-review',
  templateUrl: './mentor-review.component.html',
  styleUrls: ['./mentor-review.component.scss']
})
export class MentorReviewComponent implements OnInit {

  candidate: null | Candidate;

  scores = {
    grade: '',
    review: ''
  }
  constructor(private mentorService: MentorService, private cadidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.cadidatesService.getSelectedCandidate().subscribe(candidate => {
      this.candidate = candidate
    })
  }


  OnlyNumbersAllowed(event): boolean {
    if (this.scores.grade.length > 0 && this.scores.grade[0] !== '1') return false
    if (this.scores.grade.length > 0 && event.key !== '0') {
      return false
    }
    return /^([0-9]|10)$/.test(event.key) && this.scores.grade.length <= 1
  }

  onSubmit() {
    this.mentorService.addMentorAssessment(this.candidate.id, this.scores)
  }

}
