export class Player {
    score: number
    currentBet: number

    constructor (readonly name: string) {
        this.score = 0
        this.currentBet = 0
    }

    public getScore (): number {
        return this.score
    }

    public updateScore (points: number): void {
        this.score += points
    }
}
