import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../shared/models/customer.model';
import { Pet } from '../../../shared/models/pet.model';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
  petForm: FormGroup;
  customerId: number | null = null;
  petId: number | null = null;
  isEditMode = false;
  customer: Customer | null = null;
  pet: Pet | null = null;
  
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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.petForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['Cachorro', [Validators.required]],
      breed: [''],
      age: [null]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const customerId = params.get('customerId');
      const petId = params.get('petId');
      
      if (customerId) {
        this.customerId = +customerId;
        this.loadCustomer();
      }
      
      if (petId) {
        this.petId = +petId;
        this.isEditMode = true;
        this.loadPet();
      }
    });
  }

  loadCustomer(): void {
    if (this.customerId) {
      this.customer = this.customers.find(c => c.id === this.customerId) || null;
    }
  }

  loadPet(): void {
    if (this.customerId && this.petId && this.customer?.pets) {
      this.pet = this.customer.pets.find(p => p.id === this.petId) || null;
      
      if (this.pet) {
        this.petForm.patchValue({
          name: this.pet.name,
          type: this.pet.type,
          breed: this.pet.breed || '',
          age: this.pet.age || null
        });
      }
    }
  }

  onSubmit(): void {
    if (this.petForm.valid && this.customerId) {
      const formValues = this.petForm.value;
      
      // Em um cenário real, aqui seria feita uma chamada para a API
      // para salvar ou atualizar o pet
      
      console.log('Pet salvo:', {
        ...formValues,
        customerId: this.customerId,
        id: this.isEditMode && this.pet ? this.pet.id : Math.floor(Math.random() * 1000)
      });
      
      // Navegar de volta para a página de detalhes do cliente
      this.router.navigate(['/customers', this.customerId]);
    }
  }

  onCancel(): void {
    if (this.customerId) {
      this.router.navigate(['/customers', this.customerId]);
    } else {
      this.router.navigate(['/customers']);
    }
  }
}