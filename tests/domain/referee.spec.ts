import { Referee } from '../../src/domain/referee'

describe('computeNumberOfPointsForEachRound()', ()=> {
    describe('When the player bets 1', ()=> {
        it('+20 points because he did it', () => {
            // Given
            const referee = new Referee()
            const bet = 1
            const trick = 1

            // When
            const result = referee.computeNumberOfPointsForEachRound(bet, trick)

            // Then
            expect(result).toEqual(20)
        })

        it('-10 points because he did 2 tricks', () => {
            // Given
            const referee = new Referee()
            const bet = 1
            const trick = 2

            // When
            const result = referee.computeNumberOfPointsForEachRound(bet, trick)

            // Then
            expect(result).toEqual(-10)
        })

        it('-20 points because he did 3 tricks', () => {
            // Given
            const referee = new Referee()
            const bet = 1
            const trick = 3

            // When
            const result = referee.computeNumberOfPointsForEachRound(bet, trick)

            // Then
            expect(result).toEqual(-20)
        })

        it('-10 points because he did not win a trick', () => {
            // Given
            const referee = new Referee()
            const bet = 1
            const trick = 0

            // When
            const result = referee.computeNumberOfPointsForEachRound(bet, trick)

            // Then
            expect(result).toEqual(-10)
        })
    })

    describe('When the player bets 2', ()=> {
        it('+30 points because he did it', () => {
            // Given
            const referee = new Referee()
            const bet = 2
            const trick = 2

            // When
            const result = referee.computeNumberOfPointsForEachRound(bet, trick)

            // Then
            expect(result).toEqual(30)
        })
    })
})

