import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  @Input() activeCategory: string = 'Todos';
  @Output() categoryChange = new EventEmitter<string>();

  categories = [
    "Todos",
    "Alimentos",
    "Brinquedos",
    "Acessórios",
    "Higiene",
    "Roupas",
    "Camas",
    "Medicamentos"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category);
  }
}