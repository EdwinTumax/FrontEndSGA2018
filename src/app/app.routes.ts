import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  } from './components/home/home.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AgregarCarreraComponent } from './components/carreras/agregar-carrera/agregar-carrera.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'carreras', component: CarrerasComponent},
    { path: 'alumnos', component: AlumnosComponent},
    { path: 'agregar-carrera', component: AgregarCarreraComponent},
    { path: 'buscador/:id', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
