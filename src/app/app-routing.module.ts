import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { FormComponent } from './pages/candidate-form/form.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { TechInterviewerComponent } from './pages/tech-interviewer/tech-interviewer.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

const routes: Routes = [
	{ path: '', component: UserLoginComponent },
	{ path: 'recruiter', component: RecruiterComponent },
	{ path: 'tech-interviewer', component: TechInterviewerComponent },
	{ path: 'mentor', component: MentorComponent },
	{ path: 'manager', component: ManagerComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'form', component: FormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
