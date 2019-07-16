import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsempioComponent } from './components/esempio/esempio.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaDueComponent } from './components/pagina-due/pagina-due.component';
import { FiglioComponent } from './components/figlio/figlio.component';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponent,
    HomeComponent,
    PaginaDueComponent,
    FiglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
