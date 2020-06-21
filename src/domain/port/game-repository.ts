import { Game } from '../game'

export interface GameRepository {
    save(game: Game): void
}
