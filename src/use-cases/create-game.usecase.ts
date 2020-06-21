import { v4 as uuidv4 } from 'uuid';

import { Game } from '../domain/game'
import { Player } from '../domain/player'

export class CreateGame {

    execute(players: Player[]): string {
        new Game(players)
        return uuidv4()
    }
}
