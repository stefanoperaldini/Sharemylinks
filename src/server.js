import express from 'express';

import morgan from 'morgan';

import cors from 'cors';

import dotenv from 'dotenv';

const server = express();

dotenv.config();

server.use(morgan('dev'));

server.use(express.json());

server.use(cors());//acepta pedidos desde cualquier IP


export default server;