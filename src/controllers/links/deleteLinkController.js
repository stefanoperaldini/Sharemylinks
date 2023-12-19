import deleteLinkModel from '../../models/links/deleteLinkModel.js';
import selectLinkByIdModel from '../../models/links/selectLinkByIdModel.js'; // Importa el modelo para buscar el enlace

const deleteLinkController = async (req, res, next) => {
  try {
    const { link_id } = req.params;
    const { id } = req.user; // Usuario autenticado

    // Primero, verifica si el enlace pertenece al usuario
    const link = await selectLinkByIdModel(link_id);
    if (!link) {
      return res.status(404).send({ message: 'Link no encontrado' });
    }

    if (link.user_id !== id) {
      return res.status(403).send({ message: 'No autorizado para eliminar este enlace' });
    }

    // Si el enlace pertenece al usuario, procede a eliminarlo
    await deleteLinkModel(link_id);
    res.status(200).send({ message: 'Link eliminado con éxito' });
  } catch (error) {
    next(error);
  }
};

export default deleteLinkController;





