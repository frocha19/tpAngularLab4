import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../../models/instrumento';
import { InstrumentosService } from '../../services/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  loading = true;
  hayDatos = false;
  instrumentos: Instrumento[];
  constructor(private service: InstrumentosService, private router: Router) {}

  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos() {
    this.service.getAll().subscribe((data) => {
      this.instrumentos = data;
      this.loading = false;
      if (this.instrumentos.length >= 1) {
        this.hayDatos = true;
      }
    });
  }
  redireccionar(id: number) {
    this.router.navigateByUrl('/producto/' + id);
  }
}
