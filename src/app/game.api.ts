import { Express } from 'express'
import { Lookup } from '../container'
import { CreateGame } from '../domain/usecases/create-game.usecase'
import { ValidateRound } from '../domain/usecases/validate-round.usecase'

var express = require('express');
var router = express.Router();

export default function (app: Express, lookup: Lookup) {
    return [
        createGame(app, lookup),
        validateRound(app, lookup)
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

function validateRound (app: Express, lookup: Lookup) {
    const validateRound: ValidateRound = lookup<ValidateRound>('ValidateRound')

    app.post('/:id/round', function (req, res) {
        validateRound.execute(req.params["id"], req.body["bets"], req.body["tricks"])
        res.sendStatus(201)
    })
}

module.exports = router
