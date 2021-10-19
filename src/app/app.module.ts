import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidatesViewComponent } from './components/candidates-view/candidates-view.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { CandidateComponent } from './components/candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidatesViewComponent,
    CandidatesListComponent,
    CandidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
