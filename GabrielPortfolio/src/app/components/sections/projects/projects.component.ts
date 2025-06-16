import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
 currentIndex = 0;
  autoScrollInterval: any;

@ViewChild('carouselContainer') carouselContainer!: ElementRef;
@ViewChildren('projectCard') cards!: QueryList<ElementRef>;

  projects = [
    {
      name: 'Immobiliare Massena',
      description: 'Custom site per esposizione proprietà immobiliari.',
      imageUrl: '../../../assets/img/immobiliaremassena.png',
      technologies: ['Wordpress', 'Estatik', 'Astra', 'SiteSeo'],
      demoUrl: 'https://www.immobiliaremassena.it/'
    },
    {
      name: 'Antonio Micucci PH',
      description: 'Portfolio fotografico per fotografo freelance.',
      imageUrl: '../../../assets/img/antoniomicucciph.png',
      technologies: ['Wordpress', 'Astra', 'RankMath'],
      demoUrl: 'https://www.antoniomicucciph.it/'
    },
    {
      name: 'Gioielleria Tre Passi',
      description: 'Sito vetrina per esposizione catalogo prodotti.',
      imageUrl: '../../../assets/img/trepassi.png',
      technologies: ['Joomla', 'Astra', 'SiteSeo'],
      demoUrl: 'https://www.gioielleriatrepassi.it/'
    },
    {
      name: 'SimpleBazar',
      description: 'Tool gestione prezzi per MMORPG per il monitoring dei prezzi di mercato.',
      imageUrl: '../../../assets/img/simplebazar.png',
      technologies: ['Angular', 'Node.js', 'SQLite'],
      demoUrl: 'https://ergabs.github.io/SimpleBazar/login'
    },
  ];


  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.scrollToCard();
    this.resetAutoScroll();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.scrollToCard();
    this.resetAutoScroll();
  }

  scrollToCard() {
  const container = this.carouselContainer.nativeElement;
  const card = this.cards.get(this.currentIndex)?.nativeElement;

  if (container && card) {
    const containerWidth = container.clientWidth;
    const cardWidth = card.clientWidth;

    const cardOffsetLeft = card.offsetLeft;

    const scrollLeft = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }
}

  openDemo(url: string) {
    window.open(url, '_blank');
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  resetAutoScroll() {
    clearInterval(this.autoScrollInterval);
    this.startAutoScroll();
  }
}
