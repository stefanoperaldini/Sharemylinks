import getPool from '../../database/getPool.js';

const selectUserByEmailModel = async (email) => {
    const pool = await getPool();

    const [user] = await pool.query(
        `
            SELECT id, password, recoverPassCode, active
            FROM users
            WHERE email = ?
        `,
        [email]
    );
    
    return user[0]; 
}

export default selectUserByEmailModel;