import { v4 as uuidv4 } from 'uuid'
import { Game } from './domain/game'
import { Player } from './domain/player'
import { Referee } from './domain/referee'
import { Round } from './domain/round'
import { GameInMemoryRepository } from './infra/game-in-memory-repository'

const soso = new Player('soso')
const arsi = new Player('arsi')
const jeje = new Player('jeje')
const referee = new Referee()

let game: Game
const id = uuidv4()
const repo = new GameInMemoryRepository()
game = new Game(id, [soso, arsi, jeje], repo)

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

console.log(bets)


console.log(soso.getScore())
console.log(arsi.getScore())
console.log(jeje.getScore())

