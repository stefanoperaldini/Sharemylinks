import express from 'express';

import userRouter from './userRouter.js';
import linksRouter from './linksRouter.js';

const router = express.Router();

//router.use(entriesRouter);
router.use(userRouter);
router.use(linksRouter);

export default router;
