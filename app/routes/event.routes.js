module.exports = app => {
  const events = require("../controllers/event.controller.js");
  var router = require("express").Router();
  router.post("/", events.create);
  router.get("/", events.findAll);
  router.get("/:id", events.findOne);
  router.put("/:id", events.update);
  router.delete("/:id", events.delete);
  app.use("/api/events", router);
};
