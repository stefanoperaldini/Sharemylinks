import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();

import authUserController from '../middlewares/authUserController.js'

import { newLinkController,
listLinksController } from '../controllers/links/index.js';
import voteLinksController from '../controllers/links/voteLinksController.js';
//comprobamos que nos funciona links

router.get('/links', (req, res) => res.send('Soy el linksRouter, ruta válida'));
router.get('/entries', listLinksController);
router.post('/links', newLinkController,authUserController);
router.post('/links/:link_id/votes', authUserController,voteLinksController)


export default router;
