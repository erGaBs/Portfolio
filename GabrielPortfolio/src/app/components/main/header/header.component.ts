import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  scroll(el: string) {
    var offset = 56; 
    var element = document.getElementById(el); 
    window.scroll({ top: (element!.offsetTop - offset), left: 0, behavior: 'smooth' });
}

}
