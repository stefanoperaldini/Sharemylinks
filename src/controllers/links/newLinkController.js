import insertLinkModel from '../../models/links/insertLinkModel.js';

const newLinkController = async (req, res, next) => {
  try {
    // Extrae los datos necesarios del cuerpo de la solicitud
    const { userId, url, title, description } = req.body;

    // comprobamos que todos los campos necesarios estén presentes
    if (!userId || !url || !title || !description) {
      return res
        .status(400)
        .send({ error: 'Faltan datos requeridos para el link.' });
    }

    // Inserta el link en la base de datos
    const linkId = await insertLinkModel(userId, url, title, description);

    // Envía una respuesta con el ID del link insertado
    res.send({
      status: 'ok',
      data: {
        link: {
          id: linkId,
          userId,
          url,
          title,
          description,
          createdAt: new Date(), //Devuelve la fecha de creación del link
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export default newLinkController;
