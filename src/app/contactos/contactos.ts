import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  imports: [],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css'
})
export class Contactos {
  enviarFormulario(event: Event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Te responderé pronto.');
  }
}
