import { GameInMemoryRepository } from '../../infra/game-in-memory-repository'
import { Game } from '../game'
import { Player } from '../player'
import { GameRepository } from '../port/game-repository'
import { IdService } from '../service/id.service'

type uuid = string

export class CreateGame {

    constructor (private repository: GameRepository, private idService: IdService) {
    }

    execute(playersFromRequest: string[]): uuid {

        const id = this.idService.generate()
        const gameRepository = new GameInMemoryRepository()

        let players: Player[] = []

        playersFromRequest.forEach((player: string) => {
            players.push(new Player(player))
        })

        const game = new Game(id, players)
        gameRepository.save(game)

        return id
    }
}
