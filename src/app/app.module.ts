import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ABMComponent } from './pages/abm/abm.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    UbicacionComponent,
    ProductoDetalleComponent,
    ABMComponent,
    LoadingComponent,
    RegistroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
