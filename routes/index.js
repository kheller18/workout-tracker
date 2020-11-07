const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

// router for api and html routes imported from respective directories
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
