const multer = require('multer')
const path = require('path')

export default {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (_req, file, cb) => {
            cb(null, file.originalname)
        }
    })
}