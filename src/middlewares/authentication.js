import jwt from 'jsonwebtoken'
import { secretKey } from '../config/constants'
import { isUndefined } from 'util';

export const authenticate = (req, res, next) => {
    let token = req.headers['authorization']

    if (isUndefined(token)) {
        return res.status(400).json({
            success: false,
            message: 'The token is required.'
        })
    }

    token = token.slice(7, token.length)

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.json({
                success: false,
                message: 'The token is not valid.'
            })
        }

        req.decoded = decoded
        next()
    })
}