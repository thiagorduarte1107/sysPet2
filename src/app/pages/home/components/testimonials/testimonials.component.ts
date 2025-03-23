import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  getStarArray(count: number): number[] {
    return Array(count).fill(0).map((_, i) => i);
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      pet: 'Max',
      petType: 'Golden Retriever',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      rating: 5,
      comment: 'A equipe da Animal World é absolutamente incrível! Meu cachorro Max sempre volta para casa feliz e lindamente arrumado. A atenção aos detalhes é impecável.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      pet: 'Luna',
      petType: 'Gato Persa',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      rating: 5,
      comment: 'Levo minha gata Luna para a Animal World há anos e nunca fiquei desapontado. Os serviços de estética são de primeira qualidade e Luna sempre fica fabulosa!'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      pet: 'Bella',
      petType: 'Shih Tzu',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      rating: 4,
      comment: 'Bella sempre recebe excelentes cuidados na Animal World. A equipe é amigável e profissional. Recomendo fortemente!'
    }
  ]
}