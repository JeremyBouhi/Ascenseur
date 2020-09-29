import * as fs from 'fs'
import { Game, Tricks } from '../../../src/domain/game'
import { Referee } from '../../../src/domain/referee'
import { FinishRound } from '../../../src/domain/usecase/finish-round.usecase'
import { GameInMemoryRepository } from '../../../src/infra/game-in-memory-repository'
import { expect } from 'chai'
import { unPartieApresQueChaqueJoueurAitMise, unPartieApresLePremierRound } from '../../fixture/game.fixture'

describe('FinishRoundUsecase', () => {
    const idGame = 'fakeUuid'
    const filePath = `games/${idGame}.json`
    const init = JSON.stringify(unPartieApresQueChaqueJoueurAitMise)

    beforeEach(() => {
        fs.writeFileSync(filePath, init.toString())
    })

    afterEach(() => {
        fs.unlink(filePath, () => {
        })
    })

    it('enregistre les scores à la fin du round', () => {
        // Given
        const gameRepository = new GameInMemoryRepository()


        const tricks: Tricks = {
            'stan': 0,
            'nico': 0,
            'jeje': 2
        }

        // When
        const referee = new Referee()
        const finishRound = new FinishRound(gameRepository, referee)
        finishRound.execute(idGame, tricks)
        const actualGame: Game = gameRepository.getGameById(idGame)

        // Then
        expect(actualGame).to.be.deep.equal(unPartieApresLePremierRound)
    })
})
