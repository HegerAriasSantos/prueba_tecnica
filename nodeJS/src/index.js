const express = require("express");
const app = express();
const serve = require("http").Server(app);
const cors = require("cors");
const router = require("./network/routes");

app.set("port", 4001);
app.use(
  express.json({
    type: "application/json",
  }),
);
app.use(cors());

router(app);
serve.listen(app.get("port"), function () {
  console.log(
    `la aplicacion esta funcionado en http://localhost:${app.get("port")}`,
  );
});
