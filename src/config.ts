const { Envie, Joi } = require('envie')

export interface Config {
    PORT: string
}

export const config = Envie({
    PORT: Joi
        .number()
        .default(8080)
        .description('Port sur lequel l‘API écoute')
})
