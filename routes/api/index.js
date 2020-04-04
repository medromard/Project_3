const router = require("express").Router();
const shoeRoutes = require("./finds");

// Shoe routes
router.use("/finds", shoeRoutes);

module.exports = router;
