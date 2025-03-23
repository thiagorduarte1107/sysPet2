import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features = [
    {
      icon: 'shield',
      title: 'Cuidado Premium',
      description: 'Nossos especialistas em estética e veterinários fornecem cuidados de alta qualidade para seus amados pets.'
    },
    {
      icon: 'clock',
      title: 'Agendamento Conveniente',
      description: 'Agende compromissos facilmente com nosso sistema de reservas online intuitivo.'
    },
    {
      icon: 'thumbs-up',
      title: 'Satisfação Garantida',
      description: 'Estamos comprometidos em garantir que você e seu pet tenham a melhor experiência possível.'
    },
    {
      icon: 'heart',
      title: 'Cuidado Personalizado',
      description: 'Serviços personalizados para atender às necessidades e preferências únicas do seu pet.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}