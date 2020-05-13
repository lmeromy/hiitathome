const express = require("express");
const Exercises = require("../models/exercises");

const router = express.Router();

router.get("/", function (req, res) {
  Exercises.retrieveAll(function (err, exercises) {
    if (err) return res.json(err);
    return res.json(exercises);
  });
});

router.post("/", function (req, res) {
  const exercise = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };

  Exercises.insert(exercise),
    function (err, result) {
      if (err) return res.json(err);
      return res.json(result);
    };
});

module.exports = router;
