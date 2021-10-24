import { CandidatesViewComponent } from './../../components/candidates-view/candidates-view.component';
import { StatusFiltersComponent } from './../../components/status-filters/status-filters.component';
import { CandidatesListComponent } from './../../components/candidates-list/candidates-list.component';
import { CandidateComponent } from './../../components/candidate/candidate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { CandidateDataComponent } from './candidate-data/candidate-data.component';
import { RecruiterAssesmentComponent } from './recruiter-assesment/recruiter-assesment.component';
import { RecruiterWindowComponent } from './recruiter-window/recruiter-window.component';
import { InterviewerAssesmentComponent } from './interviewer-assesment/interviewer-assesment.component';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidatesListComponent,
    StatusFiltersComponent,
    CandidatesViewComponent,
    RecruiterComponent,
    CandidateDataComponent,
    RecruiterAssesmentComponent,
    RecruiterWindowComponent,
    InterviewerAssesmentComponent],
  imports: [
    CommonModule
  ],
  exports: [RecruiterComponent]
})
export class RecruiterModule { }
