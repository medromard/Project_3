const router = require("express").Router();
const bookRoutes = require("./finds");

// Book routes
router.use("/finds", bookRoutes);

module.exports = router;
