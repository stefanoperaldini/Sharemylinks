import getPool from '../../database/getPool.js';

const selectLinkByIdModel = async (link_id) => {
  const pool = await getPool();
  const [rows] = await pool.query('SELECT * FROM links WHERE id = ?', [
    link_id,
  ]);
  return rows[0]; // Devuelve el primer link encontrado o undefined si no hay ninguno
};

export default selectLinkByIdModel;



/*import getPool from "../../database/getPool.js";

const selectLinkByIdModel = async (link_id) => {
    
    const pool = await getPool();

    const [link] = await pool.query(
        `
            SELECT l.id, l.title, , l.user_id, AVG(IFNULL(v.value,0)) AS votes, e.createdAt
            FROM links l
            LEFT JOIN linksVotes v ON v.link_id = l.id
            INNER JOIN users u ON u.id = e.user_id
            WHERE l.id = ${link_id}
            GROUP BY l.id
            ORDER BY l.createdAt DESC
        `
    );


    return link[0];

}

export default selectLinkByIdModel;*/