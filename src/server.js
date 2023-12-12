import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import  notFoundController from './middlewares/index.js';

const server = express();

dotenv.config();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());//acepta pedidos desde cualquier IP


server.use(notFoundController);

export default server;