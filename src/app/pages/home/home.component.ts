import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  features = [
    {
      icon: 'thumbs-up',
      title: 'Qualidade',
      description: 'Produtos e serviços premium para o seu melhor amigo'
    },
    {
      icon: 'heart',
      title: 'Cuidado',
      description: 'Tratamos seu pet com o mesmo amor que você'
    }
  ];

  services = [
    {
      image: 'assets/images/grooming.jpg',
      title: 'Banho e Tosa',
      description: 'Serviços completos de higiene e estética para seu pet'
    },
    {
      image: 'assets/images/vet.jpg',
      title: 'Veterinário',
      description: 'Consultas, vacinas e cuidados médicos completos'
    },
    {
      image: 'assets/images/training.jpg',
      title: 'Adestramento',
      description: 'Treinamento profissional para melhorar o comportamento'
    }
  ];

  testimonials = [
    {
      rating: 5,
      text: 'Excelente serviço! Meu cachorro sempre volta feliz e cheiroso do banho.',
      author: 'Maria Silva',
      avatar: 'assets/images/avatar1.jpg'
    },
    {
      rating: 5,
      text: 'Os veterinários são muito atenciosos e explicam tudo detalhadamente.',
      author: 'João Pereira',
      avatar: 'assets/images/avatar2.jpg'
    },
    {
      rating: 5,
      text: 'O serviço de adestramento transformou o comportamento do meu pet!',
      author: 'Ana Costa',
      avatar: 'assets/images/avatar3.jpg'
    }
  ];

}