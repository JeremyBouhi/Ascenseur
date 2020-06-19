export class Referee {

    computeNumberOfPointsForEachRound(bet: number, trick: number): number{
        const multiplicator = 10
        if (bet === trick) {
            return 10 + bet * multiplicator
        } else {
            return - Math.abs(trick - bet) * multiplicator
        }
    }
}
