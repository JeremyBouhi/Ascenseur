import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class StartGameApi {
  constructor (private httpClient: HttpClient) {
  }

  execute (joueurs: string[]): Promise<string> {
    const id = this.httpClient.post('http://localhost:8080/game', { players: joueurs }, {responseType: 'text'}).toPromise()
    return id
  }
}
