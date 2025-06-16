import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent {
  
 ngAfterViewInit() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = document.querySelectorAll('.fill');
        fills.forEach(fill => {
          const percent = fill.getAttribute('data-percent');
          fill.setAttribute('style', `width: ${percent}%`);
        });
        observer.disconnect(); // Solo una volta
      }
    });
  });

  const section = document.getElementById('hard-skills');
  if (section) {
    observer.observe(section);
  }
}

}
