import { CandidatesComponent } from './candidates.component';
import { StatusFiltersComponent } from './status-filters/status-filters.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidateComponent } from './candidate/candidate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CandidateComponent,
    CandidatesListComponent,
    StatusFiltersComponent,
    CandidatesComponent],
  imports: [
    CommonModule
  ],
  exports: [CandidatesComponent]
})
export class CandidatesModule { }
