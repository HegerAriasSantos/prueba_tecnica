const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/create", (req, res) => {
  const { first_name, perfil_id, address_id } = req.body;
  controller
    .add(first_name, perfil_id, address_id)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpecter error", 500);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  controller
    .get(id)
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

router.post("/update/:id", (req, res) => {
  const { first_name, perfil_id, address_id } = req.body;
  const { id } = req.params;
  controller
    .update(id, first_name, perfil_id, address_id)
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
