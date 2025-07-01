import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
enviarFormulario(event: Event) {
  event.preventDefault();
  alert('Gracias por tu mensaje. Te responderé pronto.');
}

}
