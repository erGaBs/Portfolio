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
    titolo: 'Diploma di maturità  I.I.S. Calvino',
    periodo: '',
    descrizione: 'Competenze acquisite nello sviluppo Front-End e Back-End (Java, C++, HTML/CSS, JavaScript), nella progettazione e gestione di database relazionali (SQL), e nell’amministrazione di sistemi e reti informatiche. Approfondita conoscenza dei processi aziendali e del ruolo dell’IT nei contesti organizzativi, unita a solide basi in ingegneria del software e metodologie di sviluppo. Esperienza pratica maturata attraverso progetti e tirocini in ambienti IT professionali.',
    icona: 'school' 
  },
  {
    titolo: 'Software Developer Tester - FOS S.p.A.',
    periodo: 'Set 2021 - Feb 2022',
    descrizione: `Ho svolto attività di testing funzionale e di accessibilità su applicazioni web sanitarie regionali per la Liguria, garantendo la conformità alle Web Content Accessibility Guidelines (WCAG) 2.1 e al European Accessibility Act, migliorando l'usabilità per tutti gli utenti, inclusi quelli con disabilità. Ho sviluppato e mantenuto script di test automatizzati utilizzando Selenium e Python. Ho collaborato strettamente con team multidisciplinari — tra cui sviluppatori, UX designer e responsabili della conformità — per individuare e risolvere problematiche di accessibilità, assicurando che le applicazioni rispettassero gli standard normativi e offrissero un'esperienza inclusiva. Ho inoltre redatto dichiarazioni di accessibilità e documentazione tecnica in linea con la Direttiva (UE) 2016/2102.`,
    icona: 'work' 
  },
  {
    titolo: 'Software Developer - C Consulting S.p.A.',
    periodo: 'Feb 2022 - Gen 2023',
    descrizione: `Progettazione e sviluppo di un'applicazione personalizzata per gestire la migrazione dei dati tra due importanti istituti bancari, garantendo l'integrità dei dati e la conformità normativa. Realizzazione di un'interfaccia front-end intuitiva con Angular per il monitoraggio e il controllo del processo di migrazione. Sviluppo di servizi back-end sicuri e affidabili in .NET per la gestione di grandi volumi di dati finanziari sensibili. Collaborazione con stakeholder e team tecnici per la definizione dei requisiti, la validazione dei flussi di lavoro e la risoluzione di problematiche nelle diverse fasi della migrazione. Contributo alle attività di testing, documentazione e deployment, supportando il rilascio puntuale e di successo dello strumento di migrazione.`,
    icona: 'work' 
  },
  {
    titolo: 'Software Engineer - NTT DATA Italia S.p.A.',
    periodo: 'Gen 2023 - Presente',
    descrizione: 'Ho sviluppato e mantenuto applicazioni web interne per una grande istituzione bancaria, garantendo elevati standard di performance e sicurezza. Ho realizzato interfacce front-end responsive con Angular, seguendo i principi moderni di UI/UX. Ho progettato e implementato servizi back-end robusti in Java, integrandoli con sistemi bancari interni e API. Ho utilizzato framework proprietari aziendali per assicurare coerenza con l’architettura enterprise e ottimizzare i processi di sviluppo. Ho collaborato strettamente con team cross-funzionali, inclusi business analyst e ingegneri QA, per fornire soluzioni software affidabili e scalabili. Ho partecipato a revisioni del codice, processi di integrazione continua e cerimonie Agile, supportando la consegna di software di alta qualità. Inoltre, ho effettuato bug fixing e sviluppato nuove funzionalità per un cliente assicurativo, concentrandomi sui servizi back-end in Java.',
    icona: 'work' 
  }
];


  toggle(index: number) {
    this.apertoIndex = this.apertoIndex === index ? null : index;
  }
}
