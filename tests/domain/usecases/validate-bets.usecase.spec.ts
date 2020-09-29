import * as fs from 'fs'
import { Bets } from '../../../src/domain/game'
import { ValidateBets } from '../../../src/domain/usecase/validate-bets.usecase'
import { GameInMemoryRepository } from '../../../src/infra/game-in-memory-repository'
import { unDebutDePartie, unPartieApresQueChaqueJoueurAitMise } from '../../fixture/game.fixture'
import { expect } from 'chai'

describe('ValidateBetsUsecase', () => {
    const idGame = 'fakeUuid'
    const filePath = `games/${idGame}.json`
    const init = JSON.stringify(unDebutDePartie)

    beforeEach(() => {
        fs.writeFileSync(filePath, init.toString())

    })
    afterEach(() => {
        fs.unlink(filePath, () => {})
    })

    it('enregistre les mises de chaque joueur', () => {
        // Given
        const gameRepository = new GameInMemoryRepository()
        const bets: Bets = {
         'nico': 0,
         'stan': 1,
         'jeje': 2,
        }

        // When
        const validateBets = new ValidateBets(gameRepository)
        validateBets.execute(idGame, bets)

        // Then
        const content = fs.readFileSync(filePath).toString()
        expect(JSON.parse(content)).to.be.deep.equal(unPartieApresQueChaqueJoueurAitMise)
    })
})
