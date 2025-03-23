import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { ServiceFiltersComponent } from './components/service-filters/service-filters.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

const routes: Routes = [
  { path: '', component: ServicesComponent }
];

@NgModule({
  declarations: [
    ServicesComponent,
    ServiceFiltersComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }