import { Game } from '../game'
import { Player } from '../player'
import { GameRepository } from '../port/game-repository'
import { Referee } from '../referee'
import { Round } from '../round'

export class ValidateRound {

    constructor (private gameRepository: GameRepository) {
    }

    execute(idGame: string, betsFromRequest: object[], tricksFromRequest: object[]): void {
        const game: Game = this.gameRepository.getGameById(idGame)

        const referee = new Referee()
        const round = new Round(game, referee)

        const bets = new Map<Player, number>()
        const tricks = new Map<Player, number>()

        game.players.forEach((player: Player) => {
            bets.set(player, betsFromRequest[player.name])
            tricks.set(player, tricksFromRequest[player.name])
        })

        round.start(bets)
        const pointsOfEachPlayer = round.end(tricks)
        game.setPlayersScore(pointsOfEachPlayer)
        game.save()
    }
}
