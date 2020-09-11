var express = require('express');
var router = express.Router();
const db = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.User.findAll().then(usrs => {
    var data = {
      title: 'Users/Index',
      content: usrs
    }
    res.render('users/index', data);
  });
});

router.get('/add',(req,res,next)=>{
  var data = {
    title: 'Users/Add'
  }
  res.render('users/add', data);
});

router.post('/add',(req,res,next) => {
  db.sequelize.sync()
  .then(()=> db.User.create({
    name: req.body.name,
    pass: req.body.pass,
    mail: req.body.mail
  }))
  .then(usr => {
    res.redirect('/users');
  });
});


module.exports = router;
