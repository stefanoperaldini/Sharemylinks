import { notFoundError } from "../services/errorservice.js";

const notFound = (req,res,next) => {
        next(notFoundError('ruta'));
}

export default notFound;
