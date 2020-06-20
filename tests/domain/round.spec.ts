import { Game } from '../../src/domain/game'
import { Player } from '../../src/domain/player'
import { Referee } from '../../src/domain/referee'
import { Round } from '../../src/domain/round'

describe('end()', () => {
    const toni = new Player('toni')
    const pada = new Player('pada')
    const ryla = new Player('ryla')

    let game: Game
    let round: Round
    let pointsComputedOfEachPlayer: Map<Player, number>
    let tricksOfEachPlayer: Map<Player, number>
    let betsOfEachPlayer: Map<Player, number>

    beforeEach(() => {
        const referee = new Referee()

        game = new Game([toni, pada, ryla])
        round = new Round(game, referee)

        pointsComputedOfEachPlayer = new Map()
        pointsComputedOfEachPlayer.set(toni, -20)
        pointsComputedOfEachPlayer.set(pada, 10)
        pointsComputedOfEachPlayer.set(ryla, 20)

        tricksOfEachPlayer = new Map()
        tricksOfEachPlayer.set(toni, 3)
        tricksOfEachPlayer.set(pada, 0)
        tricksOfEachPlayer.set(ryla, 1)
    })

    it('throw error if bets are not set yet', () => {
        // Then
        expect(() => {
            round.end(tricksOfEachPlayer)
        }).toThrow(Error)
    })

    it('send points of each player at the end of the round to the game', () => {
        // Given
        betsOfEachPlayer = new Map()
        betsOfEachPlayer.set(toni, 1)
        betsOfEachPlayer.set(pada, 0)
        betsOfEachPlayer.set(ryla, 1)
        round.start(betsOfEachPlayer)
        const spy = jest.spyOn(game, 'setPlayersScore')

        // When
        round.end(tricksOfEachPlayer)

        // Then
        expect(spy).toHaveBeenCalledWith(pointsComputedOfEachPlayer)
    })
})
