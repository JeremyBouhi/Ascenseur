import { Player } from '../../src/domain/player'

describe('Player', () => {
    let soso: Player
    let arsi: Player

    beforeEach(() => {
        soso = new Player('soso')
        arsi = new Player('arsi')
    })

    describe('constructor()', () => {
        it('every player starts with 0 point', () => {
            // Then
            expect(soso.getScore()).toEqual(0)
            expect(arsi.getScore()).toEqual(0)
        })
    })

    describe('updateScore()', () => {
        describe('When the score is 0', () => {
            it('add 20 points makes a score of 20', () => {
                // Given
                soso.updateScore(20)

                // Then
                expect(soso.getScore()).toEqual(20)
            })
        })

        describe('When the score is 20', () => {
            it('add 10 points makes a score of 30', () => {
                // Given
                soso.updateScore(20)
                soso.updateScore(10)

                // Then
                expect(soso.getScore()).toEqual(30)
            })
        })

        describe('When the score is 20', () => {
            it('less 10 points makes a score of 10', () => {
                // Given
                soso.updateScore(20)
                soso.updateScore(-10)

                // Then
                expect(soso.getScore()).toEqual(10)
            })
        })

        describe('When the score is 0', () => {
            it('less 20 points makes a score of -20', () => {
                // Given
                soso.updateScore(-20)

                // Then
                expect(soso.getScore()).toEqual(-20)
            })
        })
    })
})


