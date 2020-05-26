import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ABMComponent } from './pages/abm/abm.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'abm', component: ABMComponent },
  { path: 'abm/:id', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
