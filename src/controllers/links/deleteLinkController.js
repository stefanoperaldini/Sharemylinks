// src/controllers/links/deleteLinkController.js

import deleteLinkModel from '../../models/links/deleteLinkModel.js';

const deleteLinkController = async (req, res, next) => {
  try {
    const { link_id } = req.params;
    await deleteLinkModel(link_id);
    res.status(200).send({ message: 'Link eliminado con éxito' });
  } catch (error) {
    next(error);
  }
};

export default deleteLinkController;
