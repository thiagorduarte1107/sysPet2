import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria.silva@example.com',
      phone: '+55 11 98765-4321',
      status: 'active',
      pets: [
        { id: 1, name: 'Rex', type: 'Cachorro', breed: 'Labrador', customerId: 1 },
        { id: 2, name: 'Luna', type: 'Cachorro', breed: 'Poodle', customerId: 1 }
      ]
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao.santos@example.com',
      phone: '+55 11 91234-5678',
      status: 'active',
      pets: [
        { id: 3, name: 'Mia', type: 'Gato', breed: 'Siamês', customerId: 2 }
      ]
    },
    {
      id: 3,
      name: 'Ana Oliveira',
      email: 'ana.oliveira@example.com',
      phone: '+55 11 99876-5432',
      status: 'active',
      pets: [
        { id: 4, name: 'Bob', type: 'Cachorro', breed: 'Golden Retriever', customerId: 3 },
        { id: 5, name: 'Nina', type: 'Gato', breed: 'Persa', customerId: 3 },
        { id: 6, name: 'Toby', type: 'Cachorro', breed: 'Bulldog', customerId: 3 }
      ]
    },
    {
      id: 4,
      name: 'Carlos Mendes',
      email: 'carlos.mendes@example.com',
      phone: '+55 11 97654-3210',
      status: 'inactive',
      pets: [
        { id: 7, name: 'Thor', type: 'Cachorro', breed: 'Rottweiler', customerId: 4 }
      ]
    },
    {
      id: 5,
      name: 'Lucia Ferreira',
      email: 'lucia.ferreira@example.com',
      phone: '+55 11 95432-1098',
      status: 'active',
      pets: [
        { id: 8, name: 'Mel', type: 'Cachorro', breed: 'Shih Tzu', customerId: 5 },
        { id: 9, name: 'Simba', type: 'Gato', breed: 'Maine Coon', customerId: 5 }
      ]
    }
  ];

  filteredCustomers: Customer[] = [];
  activeFilter: 'all' | 'active' | 'inactive' = 'all';
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.customers];
    
    // Aplicar filtro de status
    if (this.activeFilter === 'active') {
      result = result.filter(customer => customer.status === 'active');
    } else if (this.activeFilter === 'inactive') {
      result = result.filter(customer => customer.status === 'inactive');
    }
    
    // Aplicar filtro de pesquisa
    if (this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase().trim();
      result = result.filter(customer => 
        customer.name.toLowerCase().includes(term) || 
        customer.email.toLowerCase().includes(term) ||
        customer.phone.includes(term)
      );
    }
    
    this.filteredCustomers = result;
  }

  setFilter(filter: 'all' | 'active' | 'inactive'): void {
    this.activeFilter = filter;
    this.applyFilters();
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  getPetCount(customer: Customer): number {
    return customer.pets?.length || 0;
  }
}