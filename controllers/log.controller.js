const LogModel = require("../models/log.model");

exports.add = (req, res) => {
  const payload = req.body;
  const log = new LogModel(payload);
  log
    .save()
    .then(res.status(201).end())
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};
