/* file src/app/app.module.ts */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EsempioComponenteComponent } from './esempio-componente/esempio-componente.component';
import { CarDescriptionComponent } from './car-description/car-description.component';
import { Mouse } from './mouse/mouse-component';
import { Convertitore } from './convertitore/convertitore-euro-dollaro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponenteComponent,
    CarDescriptionComponent,
    Mouse,
    Convertitore
  ],
  imports: [
    BrowserModule,
    FormsModule // Form Modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
