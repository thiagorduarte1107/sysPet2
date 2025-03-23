import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  searchQuery: string = '';
  activeCategory: string = 'Todos';
  sortOption: string = 'relevance';
  
  services: Service[] = [
    {
      id: 1,
      name: "Banho Completo",
      price: 79.90,
      rating: 4.9,
      reviews: 154,
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Banho e Tosa",
      duration: "1 hora",
      description: "Banho completo com shampoo especial, secagem, escovação e perfume."
    },
    {
      id: 2,
      name: "Tosa Higiênica",
      price: 59.90,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      category: "Banho e Tosa",
      duration: "45 min",
      description: "Tosa das regiões íntimas, patas e face do animal para maior higiene e conforto."
    },
    {
      id: 3,
      name: "Consulta Veterinária",
      price: 129.90,
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      category: "Veterinário",
      duration: "30 min",
      description: "Consulta com veterinário para avaliar a saúde geral do seu pet."
    },
    {
      id: 4,
      name: "Taxi Dog",
      price: 49.90,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80",
      category: "Taxi Dog",
      duration: "Variável",
      description: "Transporte seguro e confortável para seu pet para qualquer lugar da cidade."
    },
    {
      id: 5,
      name: "Hospedagem Pet",
      price: 89.90,
      rating: 4.9,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "Hospedagem",
      duration: "Diária",
      description: "Acomodação confortável para seu pet com monitoramento 24 horas."
    },
    {
      id: 6,
      name: "Adestramento Básico",
      price: 149.90,
      rating: 4.7,
      reviews: 62,
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Adestramento",
      duration: "1 hora",
      description: "Sessão de adestramento para ensinar comandos básicos de obediência."
    },
    {
      id: 7,
      name: "Spa Pet",
      price: 119.90,
      rating: 4.8,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1596206186161-0f0bb130a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Spa",
      duration: "2 horas",
      description: "Tratamento completo de relaxamento com massagem, aromaterapia e hidratação."
    },
    {
      id: 8,
      name: "Creche Diária",
      price: 69.90,
      rating: 4.6,
      reviews: 58,
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1523&q=80",
      category: "Creche",
      duration: "Diária",
      description: "Um dia inteiro de diversão e socialização para seu pet enquanto você trabalha."
    },
  ];

  // Variáveis para armazenar os filtros selecionados
  selectedPriceRange: number = 300;
  selectedRatings: number[] = [];
  selectedDurations: string[] = [];

  get filteredServices(): Service[] {
    return this.services.filter(service => {
      // Filtro por termo de busca
      const matchesSearch = service.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      // Filtro por categoria
      const matchesCategory = this.activeCategory === 'Todos' || service.category === this.activeCategory;
      
      // Filtro por preço
      const matchesPrice = service.price <= this.selectedPriceRange;
      
      // Filtro por avaliação
      const matchesRating = this.selectedRatings.length === 0 || 
        this.selectedRatings.some(rating => service.rating >= rating);
      
      // Filtro por duração
      const matchesDuration = this.selectedDurations.length === 0 || 
        this.selectedDurations.includes(service.duration);
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesDuration;
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  onCategoryChange(category: string): void {
    this.activeCategory = category;
  }

  onPriceRangeChange(price: number): void {
    this.selectedPriceRange = price;
  }

  onRatingFilterChange(ratings: number[]): void {
    this.selectedRatings = ratings;
  }

  onDurationFilterChange(durations: string[]): void {
    this.selectedDurations = durations;
  }

  onSortChange(): void {
    switch (this.sortOption) {
      case 'price-asc':
        this.services.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.services.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        this.services.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        this.services.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Relevância (ordem original)
        this.services.sort((a, b) => a.id - b.id);
        break;
    }
  }
}