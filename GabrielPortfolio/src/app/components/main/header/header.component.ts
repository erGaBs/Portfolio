import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  scroll(el: string) {
    var offset = 59; 
    var element = document.getElementById(el); 
    this.closeMenu()
    window.scroll({ top: (element!.offsetTop - offset), left: 0, behavior: 'smooth' });
    
}

  closeMenu(){
    let element = document.getElementById("navbarNav")
    element?.classList.remove("show")
  }
}
