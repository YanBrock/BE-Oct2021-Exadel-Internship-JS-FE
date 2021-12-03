import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCandidateComponent } from './search-candidate.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		SearchCandidateComponent,
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		FormsModule,
	],
	exports: [
		SearchCandidateComponent
	]
})
export class SearchCandidateModule { }
