import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoComponent } from './pages/calculo/calculo.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

const routes: Routes = [{
  component: CalculoComponent,
  path: 'calculadora'
},
{
  component: SeguimientoComponent,
  path: 'seguimiento'

},
{
  component: SucursalesComponent,
  path: 'sucursales'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
