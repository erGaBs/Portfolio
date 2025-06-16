import { Component } from '@angular/core';

interface Esperienza {
  titolo: string;
  periodo: string;
  descrizione: string;
  icona: string; // nome icona Material o emoji
}

@Component({
  selector: 'app-esperienze',
  templateUrl: './esperienze.component.html',
  styleUrls: ['./esperienze.component.css']
})
export class EsperienzeComponent {
  // Per tenere traccia di quale pannello è aperto
  apertoIndex: number | null = null;

  esperienze: Esperienza[] = [
  {
    titolo: 'Sviluppatore Frontend',
    periodo: 'Gen 2022 - Presente',
    descrizione: 'Lavoro su progetti Angular, sviluppo UI responsive e integrazione API REST.',
    icona: 'school' // icona “code”
  },
  {
    titolo: 'Stage UX Designer',
    periodo: 'Lug 2021 - Dic 2021',
    descrizione: 'Progettazione di wireframe e prototipi per app mobile.',
    icona: 'work' // icona “palette” per design più cool
  },
  {
    titolo: 'Assistente IT',
    periodo: 'Mar 2020 - Giu 2021',
    descrizione: 'Supporto tecnico e manutenzione hardware/software.',
    icona: 'work' // icona “memory” (chip) più tecnica
  }
];


  toggle(index: number) {
    this.apertoIndex = this.apertoIndex === index ? null : index;
  }
}
