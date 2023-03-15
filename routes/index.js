var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Calculator' });
});
/* GET result page. */
router.get('/result?:result', function (req, res, next) {
  res.render('result', { title: 'Calculation Result', result: req.query.result });
});
/* POST calculation. */
router.post('/calculate', function(req, res, next) {
  var numX = Number(req.body.number_x);
  var numY = Number(req.body.number_y);
  var result = 0;
  switch (req.body.operation) {
    case "substract":
    {
      result = numX - numY;
      break;
    }
    case "multiply":
    {
      result = numX * numY;
      break;
    }
    case "divide":
    {
      result = numX / numY;
      break;
    }
    default:
      result = numX + numY;
  }
  res.redirect('/result?result=' + result.toString());
});

module.exports = router;
