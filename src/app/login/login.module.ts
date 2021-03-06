import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    GoogleChartsModule,
  ]
})
export class LoginModule { }