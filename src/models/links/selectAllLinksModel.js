import getPool from '../../database/getPool.js';

const selectAllLinksModel = async () => {
  const pool = await getPool();
  const [links] = await pool.query('SELECT * FROM links');
  return links;
};

export default selectAllLinksModel;
