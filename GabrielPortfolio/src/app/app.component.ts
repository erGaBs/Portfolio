import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Gabriel Colla - Software Engineer');

    this.metaService.addTags([
      { name: 'description', content: 'Portfolio di Gabriel Colla, Software Engineer specializzato in sviluppo web, applicazioni Angular, e soluzioni software innovative.' },
      { name: 'keywords', content: 'Gabriel Colla, software engineer, sviluppo software, Angular developer, programmatore, sviluppo web, tecnologia, coding, programmazione' },
      { name: 'author', content: 'Gabriel Colla' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }
}
