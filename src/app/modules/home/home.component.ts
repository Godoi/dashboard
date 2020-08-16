import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public config = [
    {
      arrows: true,
      icon: 'i-capture-documents',
      title: ' Capturar Documentos Administrativos ',
      url: '/capture-documents',
    },
    {
      arrows: true,
      icon: 'i-consult-documents',
      title: 'Consultar Documentos Administrativos ',
      url: '/capture-documents',
    },
  ]
}
