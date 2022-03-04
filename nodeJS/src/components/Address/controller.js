const model = require("./model");

function add(province, city) {
  return new Promise(async (resolve, reject) => {
    if (!(province && city)) {
      return reject("All input is required");
    }
    const response = await model.add(province, city);

    if (response.length <= 0) {
      return reject("Error");
    }
    return resolve(response);
  });
}
function update(id, province, city) {
  return new Promise(async (resolve, reject) => {
    if (!(id && province && city)) {
      return reject("All input is required");
    }
    const response = await model.update(id, city, province);
    if (response.length <= 0) {
      return reject("Error");
    }
    resolve(response);
  });
}

function get(id) {
  return new Promise(async (resolve, reject) => {
    const response = await model.get(id);
    if (response.length <= 0) {
      return reject("Error");
    }
    resolve(response);
  });
}
function getAll() {
  return new Promise(async (resolve, reject) => {
    const response = await model.getAll();
    if (response.length <= 0) {
      return reject("Error");
    }
    resolve(response);
  });
}
function remove(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      return reject("All input is required");
    }
    const response = await model.remove(id);
    resolve(response);
  });
}

module.exports = {
  add,
  get,
  getAll,
  update,
  remove,
};
