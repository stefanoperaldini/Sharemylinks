import express from 'express';
//hacemos el enrutador 
const router = express.Router();

import {
     newUserController, 
     loginUserController
     } from '../controllers/users/index.js';

//comprobamos que nos funciona users
router.get('/users', (req, res) => res.send('Soy el userRouter, ruta válida'));

router.post('/users/register', newUserController);
router.post('/users/login', loginUserController);
export default router;
