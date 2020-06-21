import { Game } from '../domain/game'
import { Player } from '../domain/player'
import { Referee } from '../domain/referee'
import { Round } from '../domain/round'

export class ValidateRound {

    execute(game: Game, bets: Map<Player, number>, tricks: Map<Player, number>): void {
        const referee = new Referee()
        const round = new Round(game, referee)

        round.start(bets)
        round.end(tricks)
    }
}
