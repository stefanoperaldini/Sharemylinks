import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();
import { newLinkController } from '../controllers/links/index.js';
//comprobamos que nos funciona links
router.get('/links', (req, res) => res.send('Soy el linksRouter, ruta válida'));
router.post('/links', newLinkController);
export default router;
