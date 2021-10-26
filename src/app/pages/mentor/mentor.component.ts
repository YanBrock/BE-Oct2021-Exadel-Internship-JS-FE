import { Component, OnInit } from '@angular/core';
import { MentorServise } from './mentor.servise';
import { NgForm } from '@angular/forms'
interface user {
  id: number | string,
  name: string
}
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
  user = null;
  finalReviw = '';

  value = 0
  users: user[] = [
    {
      id: 1,
      name: 'Jhon Jhonson'
    },
    {
      id: 2,
      name: 'Margo Smith'
    },
    {
      id: 3,
      name: 'Arthur Diesel'
    }

  ];
  onClick() {
    const newReview = {
      userId: this.user.id,
      raiting: this.value,
      review: this.finalReviw
    }
    console.log(newReview)
    this.user = null
    this.value = 0
    this.finalReviw = ''
  }
  constructor(private mentorservise: MentorServise) { }
  chooseUser(user) {
    this.mentorservise.getUserData(user.id).subscribe((obj) => {
      this.user = { ...user, userData: obj }
    })
  }
  ngOnInit(): void {
  }

}
