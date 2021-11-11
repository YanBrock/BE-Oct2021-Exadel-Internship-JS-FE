import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormModule } from './pages/candidate-form/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginModule } from './pages/user-login/user-login.module';
import { RecruiterModule } from './pages/recruiter/recruiter.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from './app.i18n';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundModule } from './pages/not-found/not-found.module';
<<<<<<< HEAD
import { AdminModule } from './pages/admin/admin.module';
=======
import { HeaderUserNameModule } from './components/header-user-name/header-user-name.module';
import { TechInterviewerModule } from './pages/tech-interviewer/tech-interviewer.module';
import {MatSelectModule} from '@angular/material/select';

>>>>>>> 87bac6f39fc0c8c5c001854574b8400d7ea454aa

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MentorComponent,
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
<<<<<<< HEAD
    NotFoundModule
=======
    NotFoundModule,
    HeaderUserNameModule,
    TechInterviewerModule,
    MatSelectModule,
>>>>>>> 87bac6f39fc0c8c5c001854574b8400d7ea454aa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
