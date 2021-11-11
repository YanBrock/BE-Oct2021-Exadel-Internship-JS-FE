import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserNameComponent } from './header-user-name.component';

@NgModule({
  declarations: [
	HeaderUserNameComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
	HeaderUserNameComponent,
  ]
})
export class HeaderUserNameModule { }
