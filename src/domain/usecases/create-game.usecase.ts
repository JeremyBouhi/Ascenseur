import { v4 as uuidv4 } from 'uuid'
import { Game } from '../game'
import { Player } from '../player'
import { GameRepository } from '../port/game-repository'

type uuid = string

export class CreateGame {

    constructor (private repository: GameRepository) {
    }

    execute(playersFromRequest: string[]): uuid {
        const id = uuidv4()
        let players: Player[] = []

        playersFromRequest.forEach((player: string) => {
            players.push(new Player(player))
        })

        const game = new Game(id, players, this.repository)
        game.save()

        return id
    }
}
