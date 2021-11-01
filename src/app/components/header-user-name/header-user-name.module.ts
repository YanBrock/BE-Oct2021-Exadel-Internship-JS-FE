import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserNameComponent } from './header-user-name.component';
import { UserLoginModule } from 'src/app/pages/user-login/user-login.module';



@NgModule({
  declarations: [
	HeaderUserNameComponent,
  ],
  imports: [
    CommonModule,
	UserLoginModule,
  ],
  exports: [
	HeaderUserNameComponent,
  ]
})
export class HeaderUserNameModule { }
