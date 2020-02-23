import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
