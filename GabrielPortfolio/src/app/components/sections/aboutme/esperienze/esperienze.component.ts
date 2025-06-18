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
    titolo: 'AccordionTitle1',
    periodo: '',
    descrizione: 'AccordionText1',
    icona: 'school' 
  },
  {
    titolo: 'AccordionTitle2',
    periodo: 'Set 2021 - Feb 2022',
    descrizione: `AccordionText2`,
    icona: 'work' 
  },
  {
    titolo: 'AccordionTitle3',
    periodo: 'Feb 2022 - Gen 2023',
    descrizione: `AccordionText3`,
    icona: 'work' 
  },
  {
    titolo: 'AccordionTitle4',
    periodo: 'Gen 2023 - Presente',
    descrizione: 'AccordionText4',
    icona: 'work' 
  }
];


  toggle(index: number) {
    this.apertoIndex = this.apertoIndex === index ? null : index;
  }
}
