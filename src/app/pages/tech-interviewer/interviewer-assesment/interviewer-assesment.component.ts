import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewer-assesment',
  templateUrl: './interviewer-assesment.component.html',
  styleUrls: ['./interviewer-assesment.component.scss']
})
export class InterviewerAssesmentComponent implements OnInit {
  scores = {
    html: '',
    css: '',
    javascript: '',
    review: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.scores)
    this.scores = {
      html: '',
      css: '',
      javascript: '',
      review: ''
    }
  }

}
