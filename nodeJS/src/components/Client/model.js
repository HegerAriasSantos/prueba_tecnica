const pool = require('../../db');

async function add(name, perfilId, adressId) {
  const response = await pool.query(`
  INSERT INTO client (first_name, perfil_id, address_id)
  VALUES ('${name}', ${perfilId}, ${adressId});`);
  return response;
}
async function get(id) {
  const response = await pool.query(`SELECT * FROM client INNER JOIN perfil ON client.perfil_id = perfil.id INNER JOIN address ON client.address_id = address.id WHERE client.id = ${id};`);

  return response;
}
async function getAll() {
  const response = await pool.query(`SELECT * FROM client INNER JOIN perfil ON client.perfil_id = perfil.id INNER JOIN address ON client.address_id = address.id ; `);

  return response;
}

async function update(id, name, perfilId, adressId) {
  const response = await pool.query(`
    UPDATE client
    SET first_name= '${name}', perfil_id = ${perfilId}, address_id = ${adressId}
    WHERE id = ${id};`);

  return response;
}
async function remove(id) {
  const response = await pool.query(`
  DELETE FROM client WHERE id = ${id};`);

  return response;
}

module.exports = {
  add,
  get,
  getAll,
  update,
  remove
};
