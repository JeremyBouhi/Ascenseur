import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Game } from '../domain/game'

@Injectable({ providedIn: 'root' })
export class RecupererPartieEnCours {

  constructor (private httpClient: HttpClient) {
  }

  execute(idGame: string): Promise<Game> {
    return this.httpClient.get<Game>(`game/${idGame}`).toPromise()
  }
}
