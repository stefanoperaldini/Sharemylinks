import express from 'express';
//hacemos el enrutador 
const router = express.Router();

import {
     newUserController, 
     loginUserController,
     validateUserController
     } from '../controllers/users/index.js';

     import authUserController from '../middlewares/authUserController.js';



//comprobamos que nos funciona users
router.get('/users', authUserController, (req, res) => res.send('Soy el userRouter, ruta válida'));

router.post('/users/register', newUserController);
router.get('/users/validate/:registrationCode', validateUserController)

router.post('/users/login', loginUserController);

export default router;


