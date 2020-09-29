import { Bets, Game } from '../game'
import { GameRepository } from '../port/game-repository'

export class ValidateBetsUsecase {

    constructor (private gameRepository: GameRepository) {
    }

    execute (idGame: string, bets: Bets): void {
        const game: Game = this.gameRepository.getGameById(idGame)

        game.players.forEach(player => {
            player.currentBet = bets[player.name]
        })

        this.gameRepository.save(game)
    }
}
