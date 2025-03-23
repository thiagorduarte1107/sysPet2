import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchQuery: string = '';
  activeCategory: string = 'Todos';
  sortOption: string = 'relevance';
  
  products: Product[] = [
    {
      id: 1,
      name: "Ração Premium para Cães",
      price: 89.90,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Alimentos",
      description: "Ração premium para cães adultos de todas as raças. Rica em nutrientes essenciais."
    },
    {
      id: 2,
      name: "Brinquedo Interativo para Gatos",
      price: 49.90,
      rating: 4.6,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Brinquedos",
      description: "Brinquedo interativo que estimula o instinto de caça dos felinos."
    },
    {
      id: 3,
      name: "Coleira Ajustável com GPS",
      price: 129.90,
      rating: 4.9,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      category: "Acessórios",
      description: "Coleira ajustável com GPS integrado para monitorar a localização do seu pet."
    },
    {
      id: 4,
      name: "Shampoo Hipoalergênico",
      price: 39.90,
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
      category: "Higiene",
      description: "Shampoo hipoalergênico para pets com pele sensível. Fórmula suave e sem parabenos."
    },
    {
      id: 5,
      name: "Casaco de Inverno para Cães",
      price: 79.90,
      rating: 4.5,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1583337426008-2fef51aa872e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      category: "Roupas",
      description: "Casaco térmico para cães, ideal para dias frios. Material impermeável e confortável."
    },
    {
      id: 6,
      name: "Cama Ortopédica para Pets",
      price: 159.90,
      rating: 4.8,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
      category: "Camas",
      description: "Cama ortopédica que proporciona suporte adequado para pets de todas as idades."
    },
    {
      id: 7,
      name: "Suplemento Vitamínico",
      price: 69.90,
      rating: 4.6,
      reviews: 63,
      image: "https://images.unsplash.com/photo-1606585302006-b880b4f3b5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Medicamentos",
      description: "Suplemento vitamínico para fortalecer o sistema imunológico do seu pet."
    },
    {
      id: 8,
      name: "Escova Removedora de Pelos",
      price: 45.90,
      rating: 4.4,
      reviews: 52,
      image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      category: "Acessórios",
      description: "Escova eficiente para remover pelos soltos e reduzir a queda de pelos em casa."
    }
  ];

  // Variáveis para armazenar os filtros selecionados
  selectedPriceRange: number = 300;
  selectedRatings: number[] = [];

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      // Filtro por termo de busca
      const matchesSearch = this.searchQuery === '' || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      // Filtro por categoria
      const matchesCategory = this.activeCategory === 'Todos' || product.category === this.activeCategory;
      
      // Filtro por preço
      const matchesPrice = product.price <= this.selectedPriceRange;
      
      // Filtro por avaliação
      const matchesRating = this.selectedRatings.length === 0 || 
        this.selectedRatings.some(rating => product.rating >= rating);
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
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

  onSortChange(): void {
    switch (this.sortOption) {
      case 'price-asc':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        this.products.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        this.products.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Relevância (ordem original)
        this.products.sort((a, b) => a.id - b.id);
        break;
    }
  }
}