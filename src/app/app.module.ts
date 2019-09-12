import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsempioComponent } from './components/esempio/esempio.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaDueComponent } from './components/pagina-due/pagina-due.component';
import { FiglioComponent } from './components/figlio/figlio.component';
import { SwapiService } from './services/swapi.service';
import { HttpClientModule } from '@angular/common/http';
import { EsempioInputComponent } from './components/esempio-input/esempio-input.component';
import { FormsModule } from '@angular/forms';
import { TwoWayComponent } from './components/two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponent,
    HomeComponent,
    PaginaDueComponent,
    FiglioComponent,
    EsempioInputComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
