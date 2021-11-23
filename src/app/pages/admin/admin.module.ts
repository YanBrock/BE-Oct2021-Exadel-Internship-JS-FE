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







@NgModule({
  declarations: [
    AdminComponent,
    AdminSettingsComponent,
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
    MatInputModule

  ]
})
export class AdminModule { }
