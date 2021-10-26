import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabGroup } from '@angular/material/tabs/tab-group';
import { MatTabLabel } from '@angular/material/tabs/tab-label';
import { MatTabsModule } from '@angular/material/tabs';
import { MentorComponent } from './mentor.component'


@NgModule({
  declarations: [
    MentorComponent
  ],
  exports: [
    MentorComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTabGroup,
    MatTabLabel

  ]
})
export class MentorModule { }
