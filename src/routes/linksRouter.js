import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();

//comprobamos que nos funciona links
router.get('/links', (req, res) => res.send('Soy el linksRouter, ruta válida'));

export default router;
