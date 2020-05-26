import { Router } from '@angular/router';
import { InstrumentosService } from '../../services/instrumentos.service';
import { Instrumento } from '../../models/instrumento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html'
})
export class ProductoDetalleComponent implements OnInit {
  instrumento: Instrumento;
  hayDato = false;
  loading = true;
  constructor(private servicio: InstrumentosService, private router: Router) {}

  ngOnInit(): void {
    this.cargarInstrumento();
  }
  cargarInstrumento() {
    this.servicio
      .getOne(Number(this.router.url.substring(10)))
      .subscribe((dato) => {
        this.instrumento = dato;
        this.loading = false;
        if (dato) {
          this.hayDato = true;
        }
      });
  }
}
