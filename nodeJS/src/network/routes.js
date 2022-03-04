const Client = require("../components/Client/view");
const Address = require("../components/Address/view");
const Perfil = require("../components/Perfil/view");

const routes = function (server) {
  server.use("/client", Client);
  server.use("/address", Address);
  server.use("/perfil", Perfil);
};

module.exports = routes;
