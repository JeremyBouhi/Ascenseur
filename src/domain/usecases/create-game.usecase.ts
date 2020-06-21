import { v4 as uuidv4 } from 'uuid';
import { GameInMemoryRepository } from '../../infra/game-in-memory-repository'
import { Game } from '../game'
import { Player } from '../player'

type uuid = string

export class CreateGame {

    execute(playersFromRequest: string[]): uuid {
        const id = uuidv4()
        let players: Player[] = []

        playersFromRequest.forEach((player: string) => {
            players.push(new Player(player))
        })

        const repository = new GameInMemoryRepository()
        const game = new Game(id, players, repository)
        game.save()

        return id
    }
}
