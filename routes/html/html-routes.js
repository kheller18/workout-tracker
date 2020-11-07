const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"))
});

router.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"))
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./exercise.html"))
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./stats.html"))
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"))
});

module.exports = router;
