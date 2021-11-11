import { CandidateDataModule } from '../../components/candidate-data/candidate-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechInterviewerComponent } from './tech-interviewer.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { CandidatesModule } from '../../components/candidates/candidates.module';
import { InterviewerAssesmentComponent } from './interviewer-assesment/interviewer-assesment.component';
import { TranslateModule } from '@ngx-translate/core';
import { TechInterviewerWindowComponent } from './tech-interviewer-window/tech-interviewer-window.component';
import { RecruiterAssesmentComponent } from './recruiter-assesment/recruiter-assesment.component'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RecruiterAssessmentModule } from '../../components/recruiter-assessment/recruiter-assessment.module';

@NgModule({
  declarations: [
    TechInterviewerComponent,
    InterviewerAssesmentComponent,
    TechInterviewerWindowComponent,
    RecruiterAssesmentComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CandidatesModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
    MatButtonModule,
    CandidateDataModule,
    RecruiterAssessmentModule
  ],
  exports: [
    TechInterviewerComponent
  ]
})
export class TechInterviewerModule { }
