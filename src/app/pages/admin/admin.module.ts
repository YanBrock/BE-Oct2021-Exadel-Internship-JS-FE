import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormSettingsComponent } from 'src/app/components/form-settings/form-settings.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';







@NgModule({
  declarations: [
    AdminComponent,
    FormSettingsComponent,
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
    MatInputModule

  ]
})
export class AdminModule { }
