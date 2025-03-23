import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../../shared/shared.module';
import { QuickViewModalComponent } from '../../shared/components/quick-view-modal/quick-view-modal.component';

const routes: Routes = [
  { path: '', component: ProductsComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFiltersComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }