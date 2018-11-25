import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() clase: string;

  @Output() tipoClase: EventEmitter<string>;
  @Output() index: EventEmitter<Number>;

  constructor() {
    this.tipoClase = new EventEmitter();
   }

  ngOnInit() {
  }

  delete() {
    this.tipoClase.emit(this.clase);
  }
  add() {
    this.tipoClase.emit(this.clase);
  }
  update() {
    this.tipoClase.emit(this.clase);
  }
}
