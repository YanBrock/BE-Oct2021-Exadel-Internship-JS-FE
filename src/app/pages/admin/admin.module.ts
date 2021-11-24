import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormSettingsComponent } from 'src/app/components/form-settings/form-settings.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { TechInterviewerAssessmentModule } from 'src/app/components/tech-interviewer-assessment/tech-interviewer-assessment.module';
import { RecruiterAssessmentModule } from 'src/app/components/recruiter-assessment/recruiter-assessment.module';
import { CandidateDataModule } from 'src/app/components/candidate-data/candidate-data.module';
import { TranslateModule } from '@ngx-translate/core';
import { CandidatesModule } from 'src/app/components/candidates/candidates.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { TeamConstructorComponent } from 'src/app/components/team-constructor/team-constructor.component';
import { ArchiveComponent } from 'src/app/components/archive/archive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AdminComponent,
		FormSettingsComponent,
		AdminWindowComponent,
		DatepickerComponent,
		TeamConstructorComponent,
		ArchiveComponent,
	],
	exports: [
		AdminComponent,
		FormSettingsComponent
	],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSelectModule,
		MatFormFieldModule,
		FormsModule,
		MatButtonModule,
		TechInterviewerAssessmentModule,
		RecruiterAssessmentModule,
		CandidateDataModule,
		TranslateModule,
		CandidatesModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
	]
})
export class AdminModule { }
