import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { PanelDeControlComponent } from './pages/panel-de-control/panel-de-control.component';

const routes: Routes = [
  {path: 'marcador', component: MarcadorComponent},
  {path: 'panel-control', component: PanelDeControlComponent},
  {path: '', redirectTo:'marcador', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
