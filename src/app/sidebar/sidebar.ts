import { Component, computed, inject, signal, Signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  private readonly router = inject(Router);

  // Creamos una signal que guarda la URL actual
  currentUrl = signal(this.router.url);

  // Escuchamos cambios de navegación y actualizamos la signal
  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });
  }
  showContactBtn = computed(() => this.currentUrl() !== '/contacto');
}
