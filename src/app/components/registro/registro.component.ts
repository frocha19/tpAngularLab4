import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../../models/instrumento';
import { InstrumentosService } from '../../services/instrumentos.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  texto = 'Agregar';
  instrumento = new Instrumento();
  hayDato = false;
  loading = true;
  image: any = null;
  cambiarImg = true;
  cambioImg = false;
  errores = false;
  constructor(private servicio: InstrumentosService, private router: Router) {}

  ngOnInit(): void {
    this.instrumento.id = null;
    if (Number(this.router.url.substring(5)) > 0) {
      this.texto = 'Editar';
      this.cargarInstrumento(Number(this.router.url.substring(5)));
    }
  }
  cargarInstrumento(id: number) {
    this.servicio.getOne(id).subscribe((dato) => {
      this.instrumento = dato;
      this.loading = false;
      if (dato) {
        this.cambiarImg = false;
        this.hayDato = true;
      }
    });
  }
  async onSubmit(f: NgForm) {
    const formData = new FormData();
    if (f.valid && !(this.image == null)) {
      formData.append('file', this.image);
      await this.servicio.subirImg(formData).subscribe(() => {
        this.instrumento.imagen = this.image.name;
      });
      if (this.instrumento.id !== null) {
        this.servicio.put(this.instrumento).subscribe(() => {
          alert('Registro editado...');
          this.router.navigateByUrl('/abm');
        });
      } else {
        this.servicio.post(this.instrumento).subscribe(() => {
          alert('Registro guardado...');
          this.router.navigateByUrl('/abm');
        });
      }
    } else {
      this.errores = true;
      alert('Falta rellenar campos obligatorios...');
    }
  }
  handleImage(event: any) {
    console.log(event.target.files[0]);
    if (event.target.files[0].size <= 250000) {
      this.image = event.target.files[0];
      this.cambioImg = true;
      this.instrumento.imagen = this.image.name;
    } else {
      alert(
        'El tamaño de la imagen es demasiado grande.\nPor favor selecione otra imagen...'
      );
    }
  }
  gratis(event: any) {
    if (this.instrumento.costoEnvio !== 'g') {
      this.instrumento.costoEnvio = 'g';
      document.getElementById('formCostoEnvio').className = 'form-control invisible';
    }else{
      this.instrumento.costoEnvio = null;
      document.getElementById('formCostoEnvio').className = 'form-control visible';
    }
  }
}
