module.exports = app => {
  const trekkers = require("../controllers/trekker.controller.js");
  var router = require("express").Router();
  router.post("/", trekkers.create);
  router.get("/", trekkers.findAll);
    router.get("/code", trekkers.findCode);

    router.get("/:code", trekkers.findOne);
  router.put("/:code", trekkers.update);
  router.delete("/:code", trekkers.delete);
  app.use("/api/trekkers", router);
};
