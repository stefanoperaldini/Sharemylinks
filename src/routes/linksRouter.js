import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();

import {
  newLinkController,
  listLinkController,
  canManageLinkController,
  deleteLinkController,
} from '../controllers/links/index.js';

import authUserController from '../middlewares/authUserController.js';
//import selectAllLinksModel from '../models/links/selectAllLinksModel.js';
//import selectLinkByIdModel from '../models/links/selectLinkByIdModel.js';
//import deleteLinkModel from '../models/links/deleteLinkModel.js';

//comprobamos que nos funciona links
//router.get('/links', (req, res) => res.send('Soy el linksRouter, ruta válida'));
//router.post('/links', newLinkController);

//ATENCION queda por comprobar:

//solo el usuario registrado puede poner un nuevo link
router.post('/links', authUserController, newLinkController);

//cualquier usuario puede ver la lista completa de links
router.get('/links', listLinkController);

//Un usuario registrado puede borrar su propio link
router.delete(
  '/links/:link_id',
  authUserController,
  canManageLinkController,
  deleteLinkController
);

export default router;
