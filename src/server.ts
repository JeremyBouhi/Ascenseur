import { config } from './config'
import { createContainer, Lookup } from './container'
import { createServer, initServer } from './index'

const server = createServer()
const port = config.PORT || 8080

createContainer(config)
    .then(async (lookup: Lookup) => {
        await initServer(server, lookup)
    })
    .then(() => start())

async function start () {
    try {
        server.listen(port, () => {
            console.log(`Serveur running at http://localhost:${port}`)
        })
    } catch (e) {
        console.error(e, 'Could not start server')
        process.exit(1)
    }
}
