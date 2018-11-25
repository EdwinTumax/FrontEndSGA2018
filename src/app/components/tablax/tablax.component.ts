import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablax',
  templateUrl: './tablax.component.html',
  styles: []
})
export class TablaxComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() model: string;
  constructor() { }

  ngOnInit() {
  }

}
