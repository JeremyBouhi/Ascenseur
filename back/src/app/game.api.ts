import { Express } from 'express'
import { Lookup } from '../container'
import { CreateGame } from '../domain/usecase/create-game.usecase'
import { FinishRound } from '../domain/usecase/finish-round.usecase'
import { ValidateBets } from '../domain/usecase/validate-bets.usecase'

var express = require('express');
var router = express.Router();

export default function (app: Express, lookup: Lookup) {
    return [
        createGame(app, lookup),
        finishRound(app, lookup),
        validateBets
    ]
}

function createGame (app: Express, lookup: Lookup) {
    const createGame: CreateGame = lookup<CreateGame>('CreateGame')

    app.post('/', function (req, res) {
        const id = createGame.execute(req.body["players"])
        res.setHeader('Location', `/game/${id}`)
        res.sendStatus(200)
    })
}

function validateBets (app: Express, lookup: Lookup) {
    const validateBets: ValidateBets = lookup<ValidateBets>('ValidateBets')

    app.post('/:id/round/validate', function (req, res) {
        validateBets.execute(req.params["id"], req.body["bets"])
        res.sendStatus(201)
    })
}

function finishRound (app: Express, lookup: Lookup) {
    const finishRound: FinishRound = lookup<FinishRound>('FinishRound')

    app.post('/:id/round/finish', function (req, res) {
        finishRound.execute(req.params["id"], req.body["tricks"])
        res.sendStatus(201)
    })
}

module.exports = router
