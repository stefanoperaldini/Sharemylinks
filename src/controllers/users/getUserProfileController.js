import selectUserByIdModel from '../../models/users/selectUserByIdModel.js';

const getUserProfileController = async (req, res, next) => {
    try {
        const { userId } = req.params;

        // Obtener información completa del usuario
        const user = await selectUserByIdModel(userId);
        
        //Se elimina la propiedad 'email' del objeto 'user' antes de enviarlo en la respuesta
        delete user.email;

        res.send({
            status: 'ok',
            data: {
                user,
            },
        });

    } catch (error) {
        next(error);
    }
};

export default getUserProfileController;