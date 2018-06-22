var express = require('express');
var router = express.Router();
var car = require('../model/car')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* save car */
router.post('/saveCar', function(req, res) {
  if(req && !req.body){
    return res.status(403).json({msg: "Please povide proper input"})
  }
  var carObj = new car(req.body)

  carObj.save(function(err, data){
    if(err){
      res.status(403).json({msg: "Something went wrong  "})
    } else {
      res.status(200).json({msg: "car record saved succesfully", id: data.id})
    }
  })
});

module.exports = router;
