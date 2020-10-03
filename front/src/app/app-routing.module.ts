import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './presentation/page/accueil/accueil.component'
import { PartieComponent } from './presentation/page/partie/partie.component'
import { PartieResolver } from './presentation/page/partie/partie.resolver'


const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: PartieComponent,
    resolve: PartieResolver,
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
