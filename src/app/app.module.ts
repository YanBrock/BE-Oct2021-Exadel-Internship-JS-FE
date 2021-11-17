import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormModule } from './pages/candidate-form/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginModule } from './pages/user-login/user-login.module';
import { RecruiterModule } from './pages/recruiter/recruiter.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from './app.i18n';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { AdminModule } from './pages/admin/admin.module';
import { HeaderUserNameModule } from './components/header-user-name/header-user-name.module';
import { TechInterviewerModule } from './pages/tech-interviewer/tech-interviewer.module';
import { MatSelectModule } from '@angular/material/select';
import { MentorModule } from '../app/pages/mentor/mentor.module'
import { Interceptor } from './interceptor/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ManagerComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    AdminModule,
    BrowserAnimationsModule,
    UserLoginModule,
    RecruiterModule,
    HttpClientModule,
    MatSlideToggleModule,
    TranslateModule.forRoot(translateModuleConfig),
    NotFoundModule,
    HeaderUserNameModule,
    TechInterviewerModule,
    MatSelectModule,
    MentorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: Interceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
