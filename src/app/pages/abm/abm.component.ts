import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../../models/instrumento';
import { InstrumentosService } from '../../services/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
})
export class ABMComponent implements OnInit {
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
  eliminar(id: number) {
    this.service.delete(id).subscribe(() => alert('Registro Eliminado'));
    window.location.reload();
  }
}
