import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SuscribeteComponent } from './suscribete/suscribete.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { CardDepartamentoComponent } from './card-departamento/card-departamento.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SuscribeteComponent,
    DepartamentosComponent,
    CardDepartamentoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
