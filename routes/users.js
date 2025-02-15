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
    title: 'Users/Add',
    form: new db.User(),
    err:null
  }
  res.render('users/add', data);
});

router.post('/add',(req,res,next) => {
  const form = {
    name: req.body.name,
    pass: req.body.pass,
    mail: req.body.mail
  };
  db.sequelize.sync()
  .then(() => db.User.create(form)
  .then(usr => {
    res.redirect('/users')
  })
  .catch(err=> {
    var data = {
      title: 'Users/Add',
      form: form,
      err: err
    }
    res.render('users/add', data);
  })
  )
});

//edit
router.get('/edit',(req,res,next)=>{
  db.User.findByPk(req.query.id)
  .then(usr => {
    var data = {
      title: 'Users/Edit',
      form: usr
    }
    res.render('users/edit', data);
  });
});

router.post('/edit',(req,res,next)=> {
  db.User.findByPk(req.body.id)
  .then(usr => {
    usr.name = req.body.name;
    usr.pass = req.body.pass;
    usr.mail = req.body.mail;
    usr.save().then(()=>res.redirect('/users'));
  });
});

//user delete
router.get('/delete',(req,res,next)=>{
  db.User.findByPk(req.query.id)
  .then(usr => {
    var data = {
      title: 'User/Delete',
      form: usr
    }
    res.render('users/delete', data);
  });
});

router.post('/delete',(req,res,next)=>{
  db.sequelize.sync()
  .then(()=> db.User.destroy({
    where:{id:req.body.id}
  }))
  .then(usr => {
    res.redirect('/users');
  });
});

//user login
router.get('/login',(req,res,next)=>{
  var data = {
    title: 'ログイン',
    content: '名前とパスワードを入力してください'
  }
  res.render('users/login', data);
});

router.post('/login',(req,res,next)=>{
  db.User.findOne({
    where:{
      name:req.body.name,
      pass:req.body.pass,
    }
  }).then(usr => {
    if (usr != null){
      res.redirect('/users');
      //req.session.login = usr;
      // let back = req.session.back;
      // if (back == null){
      //   back = '/';
      // }
      // res.redirect(back);
    } else {
      var data = {
        title: 'ログイン',
        content: '名前かパスワードに誤りがあります。再度入力してください。'
      }
      res.render('users/login', data);
    }
  })
});

//新規登録
router.get('/new',(req,res,next)=>{
  var data = {
    title: '新規登録',
    form: new db.User(),
    err:null
  }
  res.render('users/new', data);
});

router.post('/new',(req,res,next) => {
  const form = {
    name: req.body.name,
    pass: req.body.pass,
    mail: req.body.mail
  };
  db.sequelize.sync()
  .then(() => db.User.create(form)
  .then(usr => {
    res.redirect('/users')
  })
  .catch(err=> {
    var data = {
      title: 'Users/new',
      form: form,
      err: err
    }
    res.render('users/new', data);
  })
  )
});

module.exports = router;
