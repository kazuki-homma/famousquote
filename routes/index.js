var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.FamousQuotes.findAll().then(contents => {
    var data = {
      title: '言の葉の箱',
      content: contents
    }
    res.render('index', data);
  });
});

router.post('/add', function(req,res,next){
  db.sequelize.sync()
  .then(()=> db.FamousQuotes.create({
    content: req.body.content,
    detail: req.body.detail,
    author: req.body.author
  }))
  .then(quote => {
    res.redirect('/');
  });
});

module.exports = router;
