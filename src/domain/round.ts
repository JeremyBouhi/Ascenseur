import { Game } from './game'
import { Player } from './player'
import { Referee } from './referee'

export class Round {
    private bets: Map<Player, number>

    constructor (private readonly game: Game,
                 private readonly referee: Referee) {
    }

    start(bets: Map<Player, number>): void {
        this.bets = bets
    }
}
