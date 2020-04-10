const db = require("../models");
const Parser = require("rss-parser");
const parser = new Parser();

// Defining methods for the findsController
module.exports = {
  findAllHypeBeast: async function (req, res) {
    try {
      let feed = await parser.parseURL('https://hypebeast.com/footwear/feed');
      let img = feed.items[0].content;
      // console.log(img);
      let filterFeed = {items:[]}
      for(let i = 0; i < feed.items.length; i++){
        let t = feed.items[i].title;
        let p = feed.items[i].pubDate;
        let l = feed.items[i].link;
        let img = feed.items[i].content;

        //filter the pubDate
        p = p.slice(0, 16);
        //filter the title
        t = t.slice(0, 20) + "..."; 

        //parse through image
        let tempImg = "";
        let regex = /src="(https:\/\/[^">]+)"/g;

        tempImg = regex.exec(img);

        console.log(tempImg[1])

        filterFeed.items.push({title: t, pubDate: p, link: l, image: tempImg[1]}); 
    }
    //  console.log(filterFeed)
      // console.log(feed.items);
      res.send(filterFeed) }
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