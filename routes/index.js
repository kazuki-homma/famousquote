var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.FamousQuotes.findAll().then(contents => {
    var data = {
      title: 'Famous Quote',
      content: contents
    }
    res.render('index', data);
  });
});

module.exports = router;
