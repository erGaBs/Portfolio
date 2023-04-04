import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private messageService: MessageService) {}
 changeTheme(){
  this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Questa funzionalità è ancora in sviluppo' });
 }

}


