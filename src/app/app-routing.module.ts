import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';

const routes: Routes = [
	{
		path: "recruiter",
		component: RecruiterComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
