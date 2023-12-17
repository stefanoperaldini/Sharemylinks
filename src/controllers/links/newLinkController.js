import insertLinkModel from '../../models/links/insertLinkModel.js';

const newLinkController = async (req, res, next) => {
  try {
    const { user_id } = req.user; // Asumiendo que el usuario está autenticado con el middleware de authUserController
    const { url, title, description } = req.body;

    // Comprueba que todos los campos necesarios estén presentes
    if (!url || !title || !description) {
      return res
        .status(400)
        .send({
          error: 'Por favor, rellena todos los datos requeridos para el link.',
        });
    }

    // Inserta el link en la base de datos
    const link_id = await insertLinkModel(user_id, url, title, description);

    // Envía respuesta con el ID del link insertado
    res.send({
      status: 'ok',
      message: 'Link añadido correctamente',
      data: {
        link: {
          id: link_id,
          user_id,
          url,
          title,
          description,
          created_at: new Date(),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export default newLinkController;

/*const newLinkController = async (req, res, next) => {
  try {
    // Extrae los datos necesarios del cuerpo de la solicitud
    //const { user_id, url, title, description } = req.body;



    const { user_id } = req.user; // Asumiendo que el usuario está autenticado con el middelware de authUserController
    const { url, title, description } = req.body;

    // Realiza la validación del resto de los campos aquí

    await insertLinkModel(user_id, url, title, description);








    // comprobamos que todos los campos necesarios estén presentes
    if (!user_id || !url || !title || !description) {
      return res
        .status(400)
        .send({ error: 'Rellena todo los datos requeridos para el link.' });
    }

    // Inserta el link en la base de datos
    const link_id = await insertLinkModel(user_id, url, title, description);

    // Envía una respuesta con el ID del link insertado
    res.send({
      status: 'ok',
      message:'Link añadido correctamente',
      data: {
        link: {
          id: link_id,
          user_id,
          url,
          title,
          description,
          created_at: new Date(), //Devuelve la fecha de creación del link
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export default newLinkController;  */
