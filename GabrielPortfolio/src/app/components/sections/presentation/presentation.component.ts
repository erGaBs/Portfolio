import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
animate = true;

  constructor() {
    setInterval(() => {
      this.animate = false;
      setTimeout(() => this.animate = true, 50);
    }, 8000);
  }
}
