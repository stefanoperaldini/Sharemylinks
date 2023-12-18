import express from 'express';
//hacemos el enrutador
const router = express.Router();

import {
  newUserController,
  loginUserController,
  validateUserController,
  getUserProfileController,
} from '../controllers/users/index.js';
//import { userExistController } from '../middlewares/index.js';
import authUserController from '../middlewares/authUserController.js';
import userExistController from '../middlewares/userExistController.js';

//comprobamos que nos funciona users
router.get('/users', authUserController, (req, res) =>
  res.send('Soy el userRouter, ruta válida')
);

router.post('/users/register', newUserController);
router.get('/users/validate/:registrationCode', validateUserController);
router.get('/users', authUserController);

//perfil público del usuario
router.get('/users/:user_id', userExistController, getUserProfileController);

router.post('/users/login', loginUserController);

export default router;
