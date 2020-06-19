export class Player {
    private readonly score

    constructor (readonly name: string) {
        this.score = 0
    }

    getScore(): number {
        return this.score
    }
}
