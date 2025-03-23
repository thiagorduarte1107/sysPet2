import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-filters',
  templateUrl: './service-filters.component.html',
  styleUrls: ['./service-filters.component.scss']
})
export class ServiceFiltersComponent implements OnInit {
  @Input() activeCategory: string = 'Todos';
  @Output() categoryChange = new EventEmitter<string>();

  categories = [
    "Todos",
    "Banho e Tosa",
    "Veterinário",
    "Taxi Dog",
    "Hospedagem",
    "Adestramento",
    "Spa",
    "Creche"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category);
  }
}