import { Player } from './player'

type uuid = string
export type Bets = { [key: string]: number }
export type Tricks = { [key: string]: number }

export class Game {
    constructor (
        readonly id: uuid,
        readonly players: Player[]) {
    }

    run () {
        // Lancer des rounds tant que ?
    }
}
