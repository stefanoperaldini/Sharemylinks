import getPool from "../../database/getPool.js"; //accede a la base de datos
import { notFoundError } from "../../services/errorService.js";

const updateUserRegCodeModel = async (registrationCode) => { //aqui recibe el codigo de registro
    const pool = await getPool();

    const [user] = await pool.query(
        `
            SELECT id FROM users WHERE registrationCode = ?
        `,
        [registrationCode]
    );

    if(!user.length){
        notFoundError('usuario'); //este error lo lanza si el usuario ya esta activado
    }

    await pool.query(
        `
            UPDATE users
            SET active=true, registrationCode=null
            WHERE registrationCode = ?
        `,
        [registrationCode]
    );
}

export default updateUserRegCodeModel;