import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { RecupererPartieEnCours } from '../../../api/recuperer-partie-en-cours'
import { Game } from '../../../domain/game'

@Injectable({ providedIn: 'root' })
export class PartieResolver implements Resolve<Game> {

  constructor (private recupererPartieEnCours: RecupererPartieEnCours) {
  }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Game> {
    const idGame: string = route.paramMap.get('id')
    return this.recupererPartieEnCours.execute(idGame)
  }
}
