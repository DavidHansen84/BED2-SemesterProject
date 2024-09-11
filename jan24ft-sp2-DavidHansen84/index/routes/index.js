var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
  res.render('index', { title: 'Express' });
} catch (err) {
  console.error(err);
  res.status(500).json({ result: "Fail", error: "Error getting page" })
}
});

module.exports = router;
