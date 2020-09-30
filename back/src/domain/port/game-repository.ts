import { Game } from '../game'

type uuid = string

export interface GameRepository {
    save(game: Game): void
    getGameById(id: uuid): Game
}
