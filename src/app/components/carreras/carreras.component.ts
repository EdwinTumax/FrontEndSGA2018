import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styles: []
})
export class CarrerasComponent implements OnInit {
  carreras: any[] = [];
  clase = 'carrera';
  loading: boolean;
  constructor(private _router: Router, private _carreraService: CarreraService) {
    this.loading = true;
    this._carreraService.getCarreras().subscribe((data: any) => {
      this.carreras = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  eliminar(tipoClase: string) {
    if (this.clase === tipoClase) {
      console.log('Eliminando...');
    }
  }
  agregar(tipoClase: string) {
    if (this.clase === tipoClase) {
     this._router.navigate(['/agregar-carrera']);
    }
  }
  actualizar(tipoClase: string) {
    if (this.clase  === tipoClase ) {
      console.log('Actualizando...');
    }
  }
}
