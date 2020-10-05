import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartieComponent } from './presentation/page/partie/partie.component';
import { AccueilComponent } from './presentation/page/accueil/accueil.component';
import { PartieResolver } from './presentation/page/partie/partie.resolver'

@NgModule({
  declarations: [
    AppComponent,
    PartieComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PartieResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
