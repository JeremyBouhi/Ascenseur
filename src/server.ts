import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Player } from './domain/player'
import { CreateGame } from './use-cases/create-game.usecase'

const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Saluuuut')
})

app.post('/game', function (req, res) {
    const players: Player[] = []

    req.body["joueurs"].forEach((player: string) => {
        players.push(new Player(player))
    })
    const createGame = new CreateGame()
    const id = createGame.execute(players)
    res.setHeader('Location', `/game/${id}`)
    res.sendStatus(200)
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
