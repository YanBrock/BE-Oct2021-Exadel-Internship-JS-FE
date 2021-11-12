import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorReviewComponent } from './mentor-review/mentor-review.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MentorComponent } from './mentor.component';
import { CandidatesModule } from '../../components/candidates/candidates.module'
@NgModule({
  declarations: [
    MentorReviewComponent,
    MentorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    CandidatesModule

  ],
  exports: [
    MentorComponent
  ]
})
export class MentorModule { }
