import { Express } from 'express'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { Lookup } from './container'
import { CreateGame } from './domain/usecase/create-game.usecase'
import { FinishRound } from './domain/usecase/finish-round.usecase'
import { ValidateBets } from './domain/usecase/validate-bets.usecase'

export function createServer (): Express {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    return app
}

export async function initServer (app: Express, lookup: Lookup) {

    app.get('/', function (req, res) {
        res.send('Saluuuut')
    })

    app.post('/game', function (req, res) {
        const createGame: CreateGame = lookup<CreateGame>('CreateGame')
        const id = createGame.execute(req.body["players"])

        res.setHeader('Location', `/game/${id}`)
        res.sendStatus(200)
    })

    app.post('/game/:id/round/validate', function (req, res) {
        const validateBets: ValidateBets = lookup<ValidateBets>('ValidateBets')
        validateBets.execute(req.params["id"], req.body)
        res.sendStatus(201)
    })

    app.post('/game/:id/round/finish', function (req, res) {
        const finishRound: FinishRound = lookup<FinishRound>('FinishRound')
        finishRound.execute(req.params["id"], req.body)
        res.sendStatus(201)
    })
}

