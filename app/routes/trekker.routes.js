module.exports = app => {
  const trekkers = require("../controllers/trekker.controller.js");
  var router = require("express").Router();
  router.post("/", trekkers.create);
  router.get("/", trekkers.findAll);
  router.put("/:id", trekkers.update);
  router.delete("/:id", trekkers.delete);
  app.use("/api/trekkers", router);
};
