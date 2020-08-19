import { Game } from '../game'
import { Player } from '../player'
import { Referee } from '../referee'
import { Round } from '../round'

export class ValidateRound {

    execute(game: Game, betsFromRequest: object[], tricksFromRequest: object[]): void {
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
