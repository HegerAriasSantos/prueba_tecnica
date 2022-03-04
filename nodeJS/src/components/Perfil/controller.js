const model = require("./model");

function add(userName, password) {
  return new Promise(async (resolve, reject) => {
    if (!(userName && password)) {
      return reject("All input is required");
    }
    const user = await model.add(userName, password);
    if (user.length <= 0) {
      return reject("Error");
    }
    return resolve(user);
  });
}
function update(id, userName, password) {
  return new Promise(async (resolve, reject) => {
    if (!(id && userName && password)) {
      return reject("All input is required");
    }
    const updatedPerfil = await model.update(id, password, userName);
    if (!updatedPerfil) {
      return reject("Error");
    }
    resolve(updatedPerfil);
  });
}

function get(username, password) {
  return new Promise(async (resolve, reject) => {

    const allPerfil = await model.get(username, password);
    if (allPerfil.length <= 0) {
      return reject("Error");
    }
    resolve(allPerfil);
  });
}
function getAll() {
  return new Promise((resolve, reject) => {
    const allPerfil = model.getAll();
    if (allPerfil.length <= 0) {
      return reject("Error");
    }
    resolve(allPerfil);
  });
}
function remove(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      return reject("All input is required");
    }
    const deletedPerfil = await model.remove(id);
    if (deletedPerfil.length <= 0) {
      return reject("Error");
    }
    resolve(deletedPerfil);
  });
}

module.exports = {
  add,
  get,
  getAll,
  update,
  remove,
};
