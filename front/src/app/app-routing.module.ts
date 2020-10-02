import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component'
import { PartieComponent } from './page/partie/partie.component'


const routes: Routes = [
  {
    path: 'game',
    component: PartieComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
