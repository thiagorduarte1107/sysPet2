import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PetFormComponent } from './pet-form/pet-form.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: ':id', component: CustomerDetailsComponent },
  { path: ':customerId/pets/new', component: PetFormComponent },
  { path: ':customerId/pets/:petId/edit', component: PetFormComponent }
];

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailsComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersModule { }