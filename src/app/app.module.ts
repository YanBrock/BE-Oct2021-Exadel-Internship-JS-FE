import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { TechInterviewerComponent } from './pages/tech-interviewer/tech-interviewer.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesViewComponent } from './components/candidates-view/candidates-view.component';
import { StatusFiltersComponent } from './components/status-filters/status-filters.component';
import { FormModule } from './pages/candidate-form/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    UserLoginComponent,
    RecruiterComponent,
    TechInterviewerComponent,
    MentorComponent,
    ManagerComponent,
    AdminComponent,
    CalendarComponent,
    CandidatesListComponent,
    CandidateComponent,
    CandidatesViewComponent,
    StatusFiltersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
