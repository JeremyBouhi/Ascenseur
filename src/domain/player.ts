export class Player {
    private score: number

    constructor (readonly name: string) {
        this.score = 0
    }

    getScore(): number {
        return this.score
    }

    updateScore (points: number) {
        this.score += points
    }
}
