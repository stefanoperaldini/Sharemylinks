import getPool from "../../database/getPool.js";

const selectLinkByIdModel = async (link_id) => {
    
    const pool = await getPool();

    const [entry] = await pool.query(
        `
            SELECT l.id, l.title, l.place, l.user_id, AVG(IFNULL(v.value,0)) AS votes, e.createdAt
            FROM links l
            LEFT JOIN linksVotes v ON v.link_id = l.id
            INNER JOIN users u ON u.id = e.user_id
            WHERE l.id = ${link_id}
            GROUP BY l.id
            ORDER BY l.createdAt DESC
        `
    );


    return entry[0];

}

export default selectLinkByIdModel;