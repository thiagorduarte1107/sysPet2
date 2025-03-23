import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      id: 1,
      title: 'Banho & Tosa',
      description: 'Serviços profissionais de estética para manter seu pet bonito e se sentindo bem.',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 2,
      title: 'Serviço de Táxi Pet',
      description: 'Transporte conveniente para seu pet ir e voltar de consultas, creche, ou qualquer lugar que precisem ir.',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80',
    },
    {
      id: 3,
      title: 'Check-ups de Saúde',
      description: 'Consultas veterinárias regulares para garantir a saúde e o bem-estar do seu pet.',
      image: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    },
    {
      id: 4,
      title: 'Adestramento',
      description: 'Programas eficazes de treinamento para ajudar seu pet a desenvolver bom comportamento e habilidades sociais.',
      image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToServices(): void {
    this.router.navigate(['/services']);
  }
}