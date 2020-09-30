import { v4 as uuidv4 } from 'uuid'

export class IdService {
    constructor () {
    }

    generate (): string {
        return uuidv4()
    }
}
