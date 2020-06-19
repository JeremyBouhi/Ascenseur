import { Player } from '../../src/domain/player'

describe('constructor()', ()=> {
    it('tous les joueurs commencent avec 0 point', () => {
        // Given
        const soso = new Player('soso')
        const arsi = new Player('arsi')

        // Then
        expect(soso.getScore()).toEqual(0)
        expect(arsi.getScore()).toEqual(0)
    })
})

