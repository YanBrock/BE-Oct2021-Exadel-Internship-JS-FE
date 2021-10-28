import { CandidatesModule } from './../../components/candidates/candidates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { CandidateDataComponent } from './candidate-data/candidate-data.component';
import { RecruiterAssesmentComponent } from './recruiter-assesment/recruiter-assesment.component';
import { RecruiterWindowComponent } from './recruiter-window/recruiter-window.component';
import { InterviewerAssesmentComponent } from './interviewer-assesment/interviewer-assesment.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RecruiterComponent,
    CandidateDataComponent,
    RecruiterAssesmentComponent,
    RecruiterWindowComponent,
    InterviewerAssesmentComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    CandidatesModule
  ],
  exports: [RecruiterComponent]
})
export class RecruiterModule { }
