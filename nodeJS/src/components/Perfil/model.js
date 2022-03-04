const pool = require('../../db');

async function add(username, password) {
  const response = await pool.query(`
INSERT INTO perfil (name, password)
VALUES ('${username}' , '${password}');`);
  return response;
}
async function get(username, password) {
  const response = await pool.query(`SELECT * FROM perfil WHERE name = '${username}' AND password = '${password}';`);
  return response;
}
async function getAll() {
  let respuesta = await pool.query(`SELECT * FROM perfil;`)
  return respuesta;
}

async function update(id, newPassword, newUsername) {
  const response = await pool.query(`
    UPDATE perfil
    SET name = '${newUsername}', password = '${newPassword}'
    WHERE id = ${id};`);
  return response;
}
async function remove(id) {
  const response = await pool.query(`
  DELETE FROM perfil WHERE id = ${id}`);
  return response;
}

module.exports = {
  add,
  get,
  getAll,
  update,
  remove
};
