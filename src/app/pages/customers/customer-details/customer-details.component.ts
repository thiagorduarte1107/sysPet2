import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../shared/models/customer.model';
import { Pet } from '../../../shared/models/pet.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerId: number | null = null;
  customer: Customer | null = null;
  
  // Dados mockados para desenvolvimento
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.customerId = +id;
        this.loadCustomer();
      }
    });
  }

  loadCustomer(): void {
    if (this.customerId) {
      this.customer = this.customers.find(c => c.id === this.customerId) || null;
    }
  }
  
  deletePet(pet: Pet): void {
    if (this.customer && this.customer.pets) {
      // Em um cenário real, aqui seria feita uma chamada para a API
      // para excluir o pet
      
      // Remover o pet da lista de pets do cliente
      this.customer.pets = this.customer.pets.filter(p => p.id !== pet.id);
      
      console.log('Pet excluído:', pet);
    }
  }
}