const db = require("../models");
const Parser = require("rss-parser");
const parser = new Parser();

// Defining methods for the findsController
module.exports = {
  findAllHypeBeast: async function (req, res) {
    try {
      let feed = await parser.parseURL('https://hypebeast.com/footwear/feed');
      res.send(feed) }
    catch(err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
};

// findAll: function(req, res) {
//   db.Book
//     .find(req.query)
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// findById: function(req, res) {
//   db.Book
//     .findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// create: function(req, res) {
//   db.Book
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// update: function(req, res) {
//   db.Book
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// remove: function(req, res) {
//   db.Book
//     .findById({ _id: req.params.id })
//     .then(dbModel => dbModel.remove())
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }