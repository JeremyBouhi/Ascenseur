import * as fs from "fs"
import { Game } from '../domain/game'
import { GameRepository } from '../domain/port/game-repository'

type uuid = string

export class GameInMemoryRepository implements GameRepository {

    save (game: Game): void {
        const filePath = `games/${game.id}.json`
        fs.writeFileSync(filePath, JSON.stringify(game), { flag: 'wx' })
    }

    getGameById (id: uuid): Game {
        const filePath = `games/${id}.json`
        return JSON.parse(fs.readFileSync(filePath).toString()) as Game
    }
}
