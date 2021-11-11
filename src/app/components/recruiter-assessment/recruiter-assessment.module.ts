import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterAssessmentComponent } from './recruiter-assessment.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RecruiterAssessmentComponent,
  ],
  exports: [
    RecruiterAssessmentComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    TranslateModule
  ],
})
export class RecruiterAssessmentModule { }
