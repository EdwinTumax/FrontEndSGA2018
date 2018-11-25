import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carrera } from './../../interfaces/carrera.interface';
import { CarreraService } from './../../../services/carrera.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-carrera',
  templateUrl: './agregar-carrera.component.html',
  styles: []
})
export class AgregarCarreraComponent implements OnInit {
  carrera: Carrera = {
    CarreraId: 0,
    Descripcion: ''
  };
  constructor(private _router: Router, private _carreraService: CarreraService) { }

  ngOnInit() {
  }
  guardar() {
    this._carreraService.addCarrera(this.carrera).subscribe((data: any) => {
      console.log(data);
    });
    this._router.navigate(['/carreras']);
  }
}
