import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: AppointmentsComponent }
];

@NgModule({
  declarations: [
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentsModule { }