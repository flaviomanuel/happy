import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphnagesController from './controllers/OrphanagesController'; 

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphnagesController.index);
routes.get('/orphanages/:id', OrphnagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphnagesController.create);

export default routes;
