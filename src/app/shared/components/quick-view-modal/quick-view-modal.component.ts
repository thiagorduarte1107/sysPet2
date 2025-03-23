import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-quick-view-modal',
  templateUrl: './quick-view-modal.component.html',
  styleUrls: ['./quick-view-modal.component.scss']
})
export class QuickViewModalComponent {
  @Input() product: Product | null = null;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();
  
  quantity: number = 1;

  closeModal(): void {
    this.close.emit();
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    // Implementação futura para adicionar ao carrinho
    console.log('Adicionando ao carrinho:', this.product, 'Quantidade:', this.quantity);
    this.closeModal();
  }
}