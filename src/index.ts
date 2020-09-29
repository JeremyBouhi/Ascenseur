import { Express } from 'express'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Lookup } from './container'
import { CreateGame } from './domain/usecase/create-game.usecase'
import { FinishRound } from './domain/usecase/finish-round.usecase'

export function createServer (): Express {
    const app = express()
    app.use(bodyParser.json())
    return app
}

export async function initServer (app: Express, lookup: Lookup) {
    const createGame: CreateGame = lookup<CreateGame>('CreateGame')
    const validateRound: FinishRound = lookup<FinishRound>('ValidateRound')

    app.get('/', function (req, res) {
        res.send('Saluuuut')
    })

    app.post('/game', function (req, res) {
        const id = createGame.execute(req.body["players"])
        res.setHeader('Location', `/game/${id}`)
        res.sendStatus(200)
    })

    app.post('/game/:id/round', function (req, res) {
        validateRound.execute(req.params["id"], req.body["bets"], req.body["tricks"])
        res.sendStatus(201)
    })
}

