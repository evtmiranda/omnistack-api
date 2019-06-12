import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import { store, index } from './controllers/PostController';
import { store as storeLike } from './controllers/LikeController';

const routes = new Router()
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), store)
routes.get('/posts', index)

routes.post('/posts/:id/like', storeLike)

export default routes;