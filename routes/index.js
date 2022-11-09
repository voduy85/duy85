var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});


//SCHEMA
let Custommer2Schema = mongoose.Schema({
  Phone: {
    type: String,
  },
  password: {
    type: String,
  },
  TypeRegister: {
    type: String,
  },
  Fullname: {
    type: String,
  },
  TypeUser: {
    type: String,
  },
  IdProvince: {
    type: String,
  },
});

let Custommer2 = mongoose.model('Custommer2', Custommer2Schema);

router.get('/', function (req, res, next) {
  Custommer2.find({}, (Error, data) => {
    res.render('index', { Custommer2s: data });
  });
});

router.get('/form-add', function (req, res, next) {
  res.render('form-add', {});
});

router.post('/add', function (req, res, next) {
  Custommer2.create(req.body);
  res.redirect('/');
});

router.get('/form-update/:id', function (req, res, next) {
  Custommer2.findById(req.params.id, (Error, data) => {
    res.render('form-update', { Custommer2s: data });
  });
});

router.post('/update', function (req, res, next) {
  Custommer2.findByIdAndUpdate(req.body.id, req.body, (Error, data) => {
    res.redirect('/');
  });
})

router.get('/form-delete/:id', function (req, res, next) {
  Custommer2.findByIdAndDelete(req.params.id, (Error, data) => {
    res.redirect('/');
  });
});

module.exports = router;
