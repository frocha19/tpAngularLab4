import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<div class="row text-center animated fadeIn">
    <div class="col">
      <i class="fas fa-sync-alt fa-spin fa-5x"></i>
      <h1>Cargando</h1>
    </div>
  </div>`,
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
