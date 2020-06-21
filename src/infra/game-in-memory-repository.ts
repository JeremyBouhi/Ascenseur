import * as fs from "fs"
import { Game } from '../domain/game'
import { GameRepository } from '../domain/port/game-repository'

export class GameInMemoryRepository implements GameRepository {

    save (game: Game): void {
        const filePath = `games/${game.id}.json`
        fs.writeFileSync(filePath, JSON.stringify(game), { flag: 'wx' })
    }
}
