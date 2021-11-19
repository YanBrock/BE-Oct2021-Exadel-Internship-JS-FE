import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-review',
  templateUrl: './mentor-review.component.html',
  styleUrls: ['./mentor-review.component.scss']
})
export class MentorReviewComponent implements OnInit {
  scores = {
    grade: '',
    review: ''
  }
  constructor() { }

  ngOnInit(): void {
  }


  OnlyNumbersAllowed(event): boolean {
    if (this.scores.grade.length > 0 && this.scores.grade[0] !== '1') return false
    if (this.scores.grade.length > 0 && event.key !== '0') {
      return false
    }
    return /^([0-9]|10)$/.test(event.key) && this.scores.grade.length <= 1
  }

  onSubmit() {
    console.log(this.scores)

  }

}
