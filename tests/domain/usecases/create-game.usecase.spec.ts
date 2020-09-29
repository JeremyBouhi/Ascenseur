import * as fs from 'fs'
import { Game } from '../../../src/domain/game'
import { GameRepository } from '../../../src/domain/port/game-repository'
import { IdService } from '../../../src/domain/service/id.service'
import { CreateGame } from '../../../src/domain/usecase/create-game.usecase'
import { GameInMemoryRepository } from '../../../src/infra/game-in-memory-repository'
import { expect } from 'chai'
import { unDebutDePartie } from '../../fixture/game.fixture'

describe('CreateGameUsecase', () => {
    const id = 'fakeUuid'
    const filePath = `games/${id}.json`

    afterEach(() => {
        fs.unlink(filePath, () => {})
    })
    it('crée une nouvelle partie avec les joueurs', () => {
        // Given
        const gameRepositoryInMemory: GameRepository = new GameInMemoryRepository()
        const idServiceStub: IdService = {
            generate (): string {
                return id
            }
        }
        const game = new CreateGame(gameRepositoryInMemory, idServiceStub)
        const players: string[] = ['nico', 'stan', 'jeje']

        // When
        const idGame = game.execute(players)
        const actualGame: Game = gameRepositoryInMemory.getGameById(idGame)


        // Then
        expect(actualGame).to.deep.equal(unDebutDePartie)
    })
})
