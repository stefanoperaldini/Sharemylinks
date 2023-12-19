import getPool from "../../database/getPool.js";

const selectAllLinksModel = async () => {
    const pool = await getPool();

    const [links] = await pool.query(
        `
            SELECT l.id, l.url, l.title , l.description , AVG(IFNULL(v.value,0)) AS votes, l.createdAt
            FROM links l
            LEFT JOIN linksVotes v ON v.link_id = l.id
            INNER JOIN users u ON u.id = l.user_id
            GROUP BY l.id
            ORDER BY l.createdAt DESC  `
    );
      return links;
    }

    


export default selectAllLinksModel;