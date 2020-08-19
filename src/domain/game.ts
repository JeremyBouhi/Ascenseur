import { Player } from './player'
import { GameRepository } from './port/game-repository'

type uuid = string

export class Game {
    constructor (
        readonly id: uuid,
        readonly players: Player[],
        readonly repository: GameRepository) {
    }

    setPlayersScore (pointsByRound: Map<Player, number>): void {
        console.log('pointsByRound', pointsByRound)
        this.players.forEach((player: Player) => {
            player.updateScore(pointsByRound.get(player))
        })
    }

    save() {
        this.repository.save(this)
        // sauvegarder l'id de la game + les joueurs
    }

    run () {
        // Lancer des rounds tant que ?
    }
}
