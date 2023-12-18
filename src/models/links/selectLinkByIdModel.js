// src/models/links/selectLinkByIdModel.js

import getPool from '../../database/getPool.js';

const selectLinkByIdModel = async (link_id) => {
  const pool = await getPool();
  const [rows] = await pool.query('SELECT * FROM links WHERE id = ?', [
    link_id,
  ]);
  return rows[0]; // Devuelve el primer link encontrado o undefined si no hay ninguno
};

export default selectLinkByIdModel;
