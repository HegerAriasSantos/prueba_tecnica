const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/create", (req, res) => {
  const { name, password } = req.body;
  controller
    .add(name, password)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});

router.get("/login", (req, res) => {
  const { name, password } = req.params;
  controller
    .get(name, password)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});
router.get("/", (req, res) => {
  controller
    .getAll()
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});
router.post("/login", (req, res) => {
  const { name, password } = req.body;
  controller
    .get(name, password)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});

router.post("/update/:id", (req, res) => {
  const { name, password } = req.body;
  const { id } = req.params;
  controller
    .update(id, name, password)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});

router.delete("/delete/:id", function (req, res) {
  const { id } = req.params;
  controller
    .remove(id)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});

module.exports = router;
