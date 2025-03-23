import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() variant: 'default' | 'white' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get textColor(): string {
    return this.variant === 'white' ? 'text-white' : 'text-foreground';
  }

  get sizeClass(): string {
    const sizeClasses = {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl'
    };
    return sizeClasses[this.size];
  }

  get svgSize(): number {
    const sizes = {
      sm: 24,
      md: 28,
      lg: 32
    };
    return sizes[this.size];
  }
}