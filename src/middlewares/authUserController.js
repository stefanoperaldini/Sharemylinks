import jwt from 'jsonwebtoken';
import {
  invalidCredentialsError,
  notAuthenticatedError,
} from '../services/errorService.js';

const authUserController = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return notAuthenticatedError(res); // Asegúrate de enviar una respuesta y terminar la ejecución aquí
    }

    const token = authHeader.split(' ')[1];

    try {
      const tokenInfo = jwt.verify(token, process.env.SECRET);
      req.user = tokenInfo;
      next();
    } catch (error) {
      return invalidCredentialsError(res); // Asegúrate de enviar una respuesta y terminar la ejecución aquí
    }
  } catch (error) {
    next(error);
  }
};

export default authUserController;

























/*import jwt from 'jsonwebtoken';
import { invalidCredentialsError, notAuthenticatedError } from '../services/errorService.js';

const authUserController = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    // Verifica si el encabezado 'Authorization' está presente
    if (!authorization) {
      notAuthenticatedError();
    }

    let tokenInfo;

    try {
      // Verifica y decodifica el token
      tokenInfo = jwt.verify(authorization, process.env.SECRET);
    } catch (error) {
      invalidCredentialsError();
    }

    // Verifica si el token contiene la información del usuario
    if (!tokenInfo || !tokenInfo.user_id) {
      notAuthenticatedError();
    }

    // Establece la información del usuario en el objeto de solicitud (req.user)
    req.user = tokenInfo;

    // Continúa con el siguiente middleware o controlador
    next();
  } catch (error) {
    // Maneja cualquier error y pasa al siguiente middleware de manejo de errores
    next(error);
  }
};

export default authUserController;*/





/*import jwt from 'jsonwebtoken';
import { 
    invalidCredentialsError,
    notAuthenticatedError 
} 
    from '../services/errorService.js';


const authUserController = (req,res,next) => { 
    try {
        const { authorization } = req.headers;

        if(!authorization){
            notAuthenticatedError();
        }

        let tokenInfo; //si viene el token 

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET);
        } catch (error) {
            invalidCredentialsError();
        }

        req.user = tokenInfo;

        next();
    } catch (error) {
        next(error);
    }
}


export default authUserController;*/