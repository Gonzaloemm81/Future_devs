import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { CalculoComponent } from './calculo/calculo.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    SeguimientoComponent,
    CalculoComponent,
    SucursalesComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SeguimientoComponent,
    CalculoComponent,
    SucursalesComponent,
    CarruselComponent
  ]
})
export class PagesModule { }
