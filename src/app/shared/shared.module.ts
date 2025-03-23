import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { WishlistButtonComponent } from './components/wishlist-button/wishlist-button.component';
import { QuickViewModalComponent } from './components/quick-view-modal/quick-view-modal.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SectionHeadingComponent,
    StarRatingComponent,
    WishlistButtonComponent,
    QuickViewModalComponent,
    FilterPanelComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SectionHeadingComponent,
    StarRatingComponent,
    WishlistButtonComponent,
    QuickViewModalComponent,
    FilterPanelComponent,
    LogoComponent
  ]
})
export class SharedModule { }