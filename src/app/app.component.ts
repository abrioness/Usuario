import { Component } from '@angular/core';
import { url } from 'inspector';
import { title } from 'process';
import { find } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Crear Usuario', url: 'dato-usuario', icon: 'person-add' },
    { title: 'Factura', url: 'factura', icon: 'cash' },
    { title: 'Recibo', url: 'recibo', icon: 'card' },
    { title: 'Archivo', url: '/folder/archived', icon: 'archive' },
    { title: 'Informe', url: 'reporte', icon: 'list' },
    { title: 'Correo', url: 'correo', icon: 'mail' },
  ];
  public labels = [{logo:'TikTok',url:'',icon:'logo-tiktok'},{logo:'Twitter',url:'',icon:'logo-twitter'},{logo:'Facebook',url:'',icon:'logo-facebook'},{logo:'Youtube',url:'',icon: 'logo-youtube'},{icon:'Travel'},{icon:'Reminders'}];
  constructor() {}

  
}
