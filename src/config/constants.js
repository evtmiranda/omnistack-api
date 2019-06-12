const config = require('dotenv')

config()

const secretKey = process.env.SECRET_KEY
const port = process.env.PORT

module.exports = {
    secretKey,
    port
}

