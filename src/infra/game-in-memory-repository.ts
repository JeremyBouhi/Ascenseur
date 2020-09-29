import * as fs from 'fs'
import { Game } from '../domain/game'
import { GameRepository } from '../domain/port/game-repository'

type uuid = string

export class GameInMemoryRepository implements GameRepository {

    save (game: Game): void {
        const filePath = `games/${game.id}.json`
        fs.writeFileSync(filePath, JSON.stringify(game), { flag: 'w' })
    }

    getGameById (id: uuid): Game {
        const filePath = `games/${id}.json`
        const content = fs.readFileSync(filePath).toString()
        let game: Game

        try {
            game = JSON.parse(content)
        }
        catch (e) {
            console.error(e)
        }

        return game
    }
}
