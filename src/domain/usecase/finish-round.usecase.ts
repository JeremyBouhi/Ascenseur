import { Game, Tricks } from '../game'
import { Player } from '../player'
import { GameRepository } from '../port/game-repository'
import { Referee } from '../referee'

export class FinishRound {

    constructor (private gameRepository: GameRepository, private referee: Referee) {
    }

    execute (idGame: string, tricks: Tricks): void {
        const game: Game = this.gameRepository.getGameById(idGame)

        game.players.forEach((player: Player) => {
            const bet: number = player.currentBet
            const trick: number = tricks[player.name]
            const points: number = this.referee.computeNumberOfPointsForEachRound(bet, trick)
            player.score += points
            player.currentBet = 0
        })

        this.gameRepository.save(game)
    }
}
