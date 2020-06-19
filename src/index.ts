import { Game } from './domain/game'
import { Player } from './domain/player'
import { Referee } from './domain/referee'
import { Round } from './domain/round'

const soso = new Player('soso')
const arsi = new Player('arsi')
const jeje = new Player('jeje')
const referee = new Referee()

let game: Game
game = new Game([soso, arsi, jeje])

const bets = new Map<Player, number>()
bets.set(soso, 1)
bets.set(arsi, 0)
bets.set(jeje, 1)

const round = new Round(game, referee)
round.start(bets)

const tricks = new Map<Player, number>()
tricks.set(soso, 0)
tricks.set(arsi, 0)
tricks.set(jeje, 1)
round.end(tricks)

