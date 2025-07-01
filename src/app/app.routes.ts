import { Routes } from '@angular/router';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos} from './proyectos/proyectos';
import { Contactos } from './contactos/contactos';
import { Home } from './home/home';
export const routes: Routes = [
    { path: '', component: Home },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contactos }
  
];
