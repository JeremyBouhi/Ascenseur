import { Game } from '../../src/domain/game'
import { Player } from '../../src/domain/player'

describe('setPlayersScore', ()=> {
    it('calls updateScore from player class', () => {
        // Given
        const john = new Player('john')
        const game = new Game([john])
        const spy = jest.spyOn(john, 'updateScore')
        const points = new Map<Player, number>()
        points.set(john, 20)

        // When
        game.setPlayersScore(points)

        // Then
        expect(spy).toHaveBeenCalledWith(points.get(john))
    })
})
