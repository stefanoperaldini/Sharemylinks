import selectLinkByIdModel from '../../models/links/selectLinkByIdModel.js';

const canManageLinkController = async (req, res, next) => {
  try {
    const { user_id } = req.user; // Usuario autenticado
    const { link_id } = req.params;

    const link = await selectLinkByIdModel(link_id);

    if (!link) {
      return res.status(404).send({ message: 'Link no encontrado' });
    }

    if (link.user_id !== user_id) {
      return res
        .status(403)
        .send({ message: 'No autorizado para gestionar este link' });
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default canManageLinkController;
