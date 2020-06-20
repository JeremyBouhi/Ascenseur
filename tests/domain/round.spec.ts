import { Game } from '../../src/domain/game'
import { Player } from '../../src/domain/player'
import { Referee } from '../../src/domain/referee'
import { Round } from '../../src/domain/round'

describe('end()', () => {
    let game: Game
    let round: Round
    let pointsOfEachPlayer: Map<Player, number>
    let tricksOfEachPlayer: Map<Player, number>

    beforeEach(() => {
        const toni = new Player('toni')
        const pada = new Player('pada')
        const ryla = new Player('ryla')
        const referee = new Referee()

        game = new Game([toni, pada, ryla])
        round = new Round(game, referee)

        pointsOfEachPlayer = new Map()
        pointsOfEachPlayer.set(toni, -20)
        pointsOfEachPlayer.set(pada, 10)
        pointsOfEachPlayer.set(ryla, 20)

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
        // When
        round.end(tricksOfEachPlayer)

        // Then
        expect(game.setPlayersScore).toHaveBeenCalledWith(pointsOfEachPlayer)
    })
})
