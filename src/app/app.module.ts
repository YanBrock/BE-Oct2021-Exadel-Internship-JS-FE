import {Routes, RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruterComponent } from './recruter/recruter.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
	{ path: 'greeting', component: RecruterComponent },
   { path: 'about', component: AboutComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    RecruterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
