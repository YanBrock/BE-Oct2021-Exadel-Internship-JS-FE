import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MentorComponent } from './mentor.component'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgRatingBarModule } from 'ng-rating-bar';
import { MentorServise } from './mentor.servise';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MentorComponent
  ],
  exports: [
    MentorComponent
  ],
  providers: [MentorServise],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    NgRatingBarModule,
    FormsModule
  ]
})
export class MentorModule { }
