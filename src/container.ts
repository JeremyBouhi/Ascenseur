import { GameRepository } from './domain/port/game-repository'
import { Referee } from './domain/referee'
import { IdService } from './domain/service/id.service'
import { CreateGame } from './domain/usecase/create-game.usecase'
import { FinishRound } from './domain/usecase/finish-round.usecase'
import { ValidateBets } from './domain/usecase/validate-bets.usecase'
import { GameInMemoryRepository } from './infra/game-in-memory-repository'
import { Config } from './config'

export interface Container {
    GameRepository: GameRepository
    CreateGame: CreateGame
    ValidateBets: ValidateBets
    FinishRound: FinishRound
    Config: Config
}

export interface Lookup<C = Container> {
    <InstanceType extends C[keyof C]> (name: keyof C): InstanceType
}

export function lookupFrom<C> (container: C): Lookup<C> {
    return function lookup<InstanceType extends C[keyof C]> (name: keyof C): InstanceType {
        const instance: InstanceType = container[name] as InstanceType
        if (instance !== undefined) {
            return instance
        }
        throw Error(`instance ${name} not found in container`)
    }
}


export async function createContainer (config: Config): Promise<Lookup> {

    let lookup: Lookup

    const idService = new IdService()
    const referee = new Referee()
    const gameRepository = new GameInMemoryRepository()

    const createGame = new CreateGame(gameRepository, idService)
    const validateBets = new ValidateBets(gameRepository)
    const finishRound = new FinishRound(gameRepository, referee)

    const container: Container = {
        GameRepository: gameRepository,
        CreateGame: createGame,
        ValidateBets: validateBets,
        FinishRound: finishRound,
        Config: config
    }

    lookup = lookupFrom(container)
    return lookup
}

