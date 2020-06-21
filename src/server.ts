import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Player } from './domain/player'
import { CreateGame } from './domain/usecases/create-game.usecase'

const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Saluuuut')
})

app.post('/game', function (req, res) {
    const createGame = new CreateGame()
    const id = createGame.execute(req.body["players"])
    res.setHeader('Location', `/game/${id}`)
    res.sendStatus(200)
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
