const pool = require('../../db');
async function add(province, city) {
  const response = await pool.query(
    `
    INSERT INTO address (province, city)
    VALUES ('${province}', '${city}');
    `);
  return response;
}
async function get(id) {
  const response = await pool.query(`SELECT * FROM address WHERE id = ${id};`);
  return response;
}
async function getAll() {
  const response = await pool.query(`SELECT * FROM address;`);
  return response;
}

async function update(id, newCity, newProvince) {
  const response = await pool.query(`
    UPDATE address
    SET province = '${newProvince}', city = '${newCity}'
    WHERE id = ${id};`);
  return response;
}
async function remove(id) {
  const response = await pool.query(`
  DELETE FROM address WHERE id = ${id}`);
  return response;
}

module.exports = {
  add,
  get,
  getAll,
  update,
  remove
};
