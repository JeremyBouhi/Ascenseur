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

    end(tricksOfEachPlayer: Map<Player, number>): Map<Player, number> {
        if(this.bets === undefined) {
            throw new Error(`Les mises n'ont pas été définies`)
        }

        let pointsOfEachPlayer: Map<Player, number> = new Map()
        this.bets.forEach((bet: number, player: Player) => {
            pointsOfEachPlayer.set(player, this.referee.computeNumberOfPointsForEachRound(bet, tricksOfEachPlayer.get(player)))
        })
        return pointsOfEachPlayer
    }
}
