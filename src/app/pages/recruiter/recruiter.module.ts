import { CandidateDataModule } from '../../components/candidate-data/candidate-data.module';
import { CandidatesModule } from '../../components/candidates/candidates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { RecruiterAssesmentComponent } from './recruiter-assesment/recruiter-assesment.component';
import { RecruiterWindowComponent } from './recruiter-window/recruiter-window.component';
import { InterviewerAssesmentComponent } from './interviewer-assesment/interviewer-assesment.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { RecruiterAssessmentModule } from '../../components/recruiter-assessment/recruiter-assessment.module';

@NgModule({
  declarations: [
    RecruiterComponent,
    RecruiterAssesmentComponent,
    RecruiterWindowComponent,
    InterviewerAssesmentComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
    CandidatesModule,
    CandidateDataModule,
    RecruiterAssessmentModule
  ],
  exports: [RecruiterComponent]
})
export class RecruiterModule { }
