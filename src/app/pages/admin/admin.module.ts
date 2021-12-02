import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminSettingsComponent } from 'src/app/components/admin-settings/admin-settings.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { TechInterviewerAssessmentModule } from 'src/app/components/tech-interviewer-assessment/tech-interviewer-assessment.module';
import { RecruiterAssessmentModule } from 'src/app/components/recruiter-assessment/recruiter-assessment.module';
import { CandidateDataModule } from 'src/app/components/candidate-data/candidate-data.module';
import { TranslateModule } from '@ngx-translate/core';
import { CandidatesModule } from 'src/app/components/candidates/candidates.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { TeamConstructorComponent } from 'src/app/components/team-constructor/team-constructor.component';
import { ArchiveComponent } from 'src/app/components/archive/archive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
	dayGridPlugin,
	interactionPlugin,
]);

@NgModule({
	declarations: [
		AdminComponent,
		AdminSettingsComponent,
		AdminWindowComponent,
		DatepickerComponent,
		TeamConstructorComponent,
		ArchiveComponent,
	],
	exports: [
		AdminComponent,
		AdminSettingsComponent
	],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSelectModule,
		MatFormFieldModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		TechInterviewerAssessmentModule,
		RecruiterAssessmentModule,
		CandidateDataModule,
		TranslateModule,
		CandidatesModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
		MatListModule,
		MatIconModule,
		MatSlideToggleModule,
		FullCalendarModule,
	],
	providers: [],
	bootstrap: []

})

export class AdminModule { }

