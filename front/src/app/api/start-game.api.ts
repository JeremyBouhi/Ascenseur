import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class StartGameApi {
  constructor (private httpClient: HttpClient) {
  }

  execute (joueurs: string[]): Promise<void> {
    console.log(joueurs)
    return this.httpClient.post<void>('http://localhost:8080/game', joueurs).toPromise()
  }
}