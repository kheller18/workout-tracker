const router = require("express").Router();
const apiRoutes = require("./api-routes");

// router for different api routes
router.use("/workouts", apiRoutes);

module.exports = router;