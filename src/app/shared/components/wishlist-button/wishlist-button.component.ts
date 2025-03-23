import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent {
  @Input() active: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();

  toggleWishlist(): void {
    this.active = !this.active;
    this.toggle.emit(this.active);
  }
}