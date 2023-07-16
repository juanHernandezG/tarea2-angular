import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelDeControlComponent } from './pages/panel-de-control/panel-de-control.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelDeControlComponent,
    MarcadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
