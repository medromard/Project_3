const router = require("express").Router();
const findsController = require("../../controllers/findsController");

//Match with "/api/finds"
router.route("/")
  .get(findsController.findAllHypeBeast)

router.route("/hypebeast")
  .get(findsController.findAllHypeBeast)
  
// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
