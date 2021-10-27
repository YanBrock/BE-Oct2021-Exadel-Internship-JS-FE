import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechInterviewerComponent } from './pages/tech-interviewer/tech-interviewer.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormModule } from './pages/candidate-form/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginModule } from './pages/user-login/user-login.module';
import { RecruiterModule } from './pages/recruiter/recruiter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TechInterviewerComponent,
    MentorComponent,
    ManagerComponent,
    AdminComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    BrowserAnimationsModule,
    UserLoginModule,
    RecruiterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
