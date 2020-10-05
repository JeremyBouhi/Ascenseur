import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './presentation/page/accueil/accueil.component'
import { PartieComponent } from './presentation/page/partie/partie.component'

const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent,
    pathMatch: 'full'
  }, {
    path: 'game/:id',
    component: PartieComponent
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
