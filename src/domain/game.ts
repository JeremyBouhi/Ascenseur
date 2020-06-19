import { Player } from './player'

export class Game {
    constructor (readonly players: Player[]) {
    }

    setPlayersScore (pointsByRound: Map<Player, number>) {
        this.players.forEach((player: Player) => {
            player.updateScore(pointsByRound.get(player))
        })
    }
}
