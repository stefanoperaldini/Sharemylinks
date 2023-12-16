// import { notFoundError } from '../services/errorService.js';

// const notFound = (req, res, next) => {
//   next(notFoundError('ruta'));
// };

//export default notFound;

import { notFoundError } from '../services/errorService.js';

const notFound = (req, res, next) => {
  // Aquí, en lugar de llamar directamente a next(), lanzamos un error.
  // notFoundError() crea y lanza un error, que es capturado por el siguiente middleware de manejo de errores.
  const error = notFoundError('ruta');
  next(error);
};

export default notFound;
