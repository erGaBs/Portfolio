import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lingua = 'IT';
  menuAperto = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('it');
  }

  toggleLingua() {
    this.lingua = this.lingua === 'IT' ? 'EN' : 'IT';
     this.translate.use(this.lingua.toLowerCase());
  }

  toggleMenu() {
    this.menuAperto = !this.menuAperto;
  }

  chiudiMenu() {
    this.menuAperto = false;
  }

   @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width > 768 && this.menuAperto) {
      this.menuAperto = false; // Chiudi menu se la larghezza è > tablet
    }
  }
}
