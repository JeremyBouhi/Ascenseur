import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartieComponent } from './page/partie/partie.component';
import { AccueilComponent } from './page/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    PartieComponent,
    AccueilComponent
  ], imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
