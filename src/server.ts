import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Game } from './domain/game'
import { CreateGame } from './domain/usecases/create-game.usecase'
import { ValidateRound } from './domain/usecases/validate-round.usecase'
import { GameInMemoryRepository } from './infra/game-in-memory-repository'

const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Saluuuut')
})

const gameRepository = new GameInMemoryRepository()

app.post('/game', function (req, res) {
    const createGame = new CreateGame()
    const id = createGame.execute(req.body["players"], gameRepository)
    res.setHeader('Location', `/game/${id}`)
    res.sendStatus(200)
})

app.post('/game/:id/round', function (req, res) {
    console.log('id', req.params.id)
    const game = gameRepository.getGameById(req.params.id)
    const theGame = new Game(req.params.id, game.players, gameRepository)
    const validateRound = new ValidateRound()
    validateRound.execute(theGame, req.body["bets"], req.body["tricks"])
    res.sendStatus(201)
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
