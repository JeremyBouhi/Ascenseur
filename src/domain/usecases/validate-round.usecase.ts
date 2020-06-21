import { Game } from '../game'
import { Player } from '../player'
import { Referee } from '../referee'
import { Round } from '../round'

export class ValidateRound {

    execute(game: Game, bets: Map<Player, number>, tricks: Map<Player, number>): void {
        const referee = new Referee()
        const round = new Round(game, referee)

        round.start(bets)
        round.end(tricks)
    }
}
