const express = require("express"),
  router = express.Router();

// Article MODEL
const Text = require("../models/text");

// INDEX - All texts
router.get("/", (req, res) => {
  const pageNum = parseInt(req.query.pageNum);
  const pageSize = parseInt(req.query.pageSize);

  if (pageNum <= 0) {
    return res.json({
      error: true,
      message: "Invalid page",
    });
  }

  Text.find({})
    .limit(pageSize)
    .skip(pageSize * (pageNum - 1))
    .sort({ _id: -1 })
    .exec(function (err, texts) {
      if (err) {
        console.log(err);
      } else {
        res.json(texts);
      }
    });
});

// POST - New text
router.post("/", (req, res) => {
  // Preparar tipo: minusculas sin signos
  req.body.type = req.body.type
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  Text.create(req.body, (err, newText) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error: " + body);
    } else {
      res.status(200).send("Text created succesfully");
    }
  });
});

module.exports = router;
