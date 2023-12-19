import selectAllLinksModel from '../../models/links/selectAllLinksModel.js';

const listLinkController = async (req, res, next) => {
  try {
    const links = await selectAllLinksModel();

    res.json({
      status: 'ok',
      data: links,
    });
  } catch (error) {
    next(error);
  }
};

export default listLinkController;
