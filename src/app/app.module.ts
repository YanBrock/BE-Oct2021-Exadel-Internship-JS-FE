import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CandidateFormComponent } from './pages/candidate-form/candidate-form.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { TechInterviewerComponent } from './pages/tech-interviewer/tech-interviewer.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
	FooterComponent,
	CandidateFormComponent,
	UserLoginComponent,
	RecruiterComponent,
	TechInterviewerComponent,
	MentorComponent,
	ManagerComponent,
	AdminComponent,
	CalendarComponent,
	CandidateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
