const router = require("express").Router();
const apiRoutes = require("./api-routes");

router.use("/api-routes", apiRoutes);

module.exports = router;