import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Rutas
import { APPROUTING  } from './app.routes';

// Servicios

import {CarreraService} from './services/carrera.service';
import { AlumnoService } from './services/alumno.service';

// Componenetes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TablaxComponent } from './components/tablax/tablax.component';
import { SalonesComponent } from './components/salones/salones.component';
import { AgregarCarreraComponent } from './components/carreras/agregar-carrera/agregar-carrera.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrerasComponent,
    NavbarComponent,
    BuscadorComponent,
    TablaComponent,
    AlumnosComponent,
    LoadingComponent,
    TablaxComponent,
    SalonesComponent,
    AgregarCarreraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING,
    FormsModule
  ],
  providers: [CarreraService, AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
