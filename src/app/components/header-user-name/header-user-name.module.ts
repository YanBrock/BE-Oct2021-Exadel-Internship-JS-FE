import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserNameComponent } from './header-user-name.component';
// import { UserLoginModule } from 'src/app/pages/user-login/user-login.module';
// import { UserLoginService } from 'src/app/services/user-login.service';


@NgModule({
  declarations: [
	HeaderUserNameComponent,
  ],
  imports: [
    CommonModule,
	// UserLoginModule,
	// UserLoginService,
  ],
  exports: [
	HeaderUserNameComponent,
  ]
})
export class HeaderUserNameModule { }
