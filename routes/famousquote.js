var express = require('express');
var router = express.Router();
const db = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.FamousQuotes.findAll().then(quote => {
    var data = {
      title: '名言集',
      content: quote
    }
    res.render('famousquote/index', data);
  });
});

router.get('/add',(req,res,next)=>{
  var data = {
    title: '名言を追加する',
    form: new db.FamousQuotes(),
    err:null
  }
  res.render('famousquote/add', data);
});

router.post('/add',(req,res,next) => {
  const form = {
    content: req.body.content,
    detail: req.body.detail,
    author: req.body.author
  };
  db.sequelize.sync()
  .then(() => db.FamousQuotes.create(form)
  .then(quote => {
    res.redirect('/famousquote')
  })
  .catch(err=> {
    var data = {
      title: '名言を追加する',
      form: form,
      err: err
    }
    res.render('famousquote/add', data);
  })
  )
});

//edit
router.get('/edit',(req,res,next)=>{
  db.FamousQuotes.findByPk(req.query.id)
  .then(quote => {
    var data = {
      title: '編集',
      form: quote
    }
    res.render('famousquote/edit', data);
  });
});

router.post('/edit',(req,res,next)=> {
  db.FamousQuotes.findByPk(req.body.id)
  .then(quote => {
    quote.content = req.body.content;
    quote.detail = req.body.detail;
    quote.author = req.body.author;
    quote.save().then(()=>res.redirect('/famousquote'));
  });
});

// delete
router.get('/delete',(req,res,next)=>{
  db.FamousQuotes.findByPk(req.query.id)
  .then(quote => {
    var data = {
      title: '削除',
      form: quote
    }
    res.render('famousquote/delete', data);
  });
});

router.post('/delete',(req,res,next)=>{
  db.sequelize.sync()
  .then(()=> db.FamousQuotes.destroy({
    where:{id:req.body.id}
  }))
  .then(quote => {
    res.redirect('/famousquote');
  });
});

module.exports = router;
