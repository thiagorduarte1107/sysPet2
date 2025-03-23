import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showNumber: boolean = false;
  
  stars: { filled: boolean, half: boolean }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating'] || changes['maxStars']) {
      this.calculateStars();
    }
  }

  private calculateStars(): void {
    this.stars = [];
    
    for (let i = 1; i <= this.maxStars; i++) {
      // Determina se a estrela deve ser preenchida totalmente, pela metade ou vazia
      const filled = i <= Math.floor(this.rating);
      const half = !filled && (i - 0.5) <= this.rating;
      
      this.stars.push({ filled, half });
    }
  }
}