import updateUserRegCodeModel from "../../models/users/updateUserRegCodeModel.js";

const validateUserController = async (req,res,next) => {
    try {
        
        const {registrationCode} = req.params; //viene por parametros

        await updateUserRegCodeModel(registrationCode); //hace la logica en models

        res.send({
            status: 'Ok',
            message: 'Usuario activado correctamente'
        });
        
    } catch (error) {
        next(error);
    }
}

export default validateUserController;