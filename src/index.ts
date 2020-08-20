import { Express } from 'express'
import * as express from 'express'
import * as bodyParser from 'body-parser'

const gameRoutes = require('./app/game.api')

export function createServer (): Express {
    const app = express()
    app.use(bodyParser.json())
    return app
}

export async function initServer (app: Express) {

    app.get('/', function (req, res) {
        res.send('Saluuuut')
    })

    app.use('/game', gameRoutes)
}

