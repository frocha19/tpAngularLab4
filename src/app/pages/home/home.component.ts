import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="container animated fadeIn">
    <h1>Musical Hendrix</h1>
    <h4>
      Musical Hendrix es una tienda de instrumentos musicales con ya más de 15
      años de experiencia. Tenemos el conocimiento y la capacidad como para
      informarte acerca de las mejores elecciones para tu compra musical.
    </h4>
  </div>`
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
