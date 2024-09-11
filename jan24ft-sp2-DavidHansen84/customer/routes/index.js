var express = require('express');
var router = express.Router();
var db = require("../models");
var CustomerService = require("../services/CustomerService");
var customerService = new CustomerService(db);

/* GET home page. */
router.get('/', async function (req, res, next) {
	try {
	res.render('index', { title: 'Customers' });
} catch (err) {
    console.error(err);
    res.status(500).json({ result: "Fail", error: "Error getting page" })
  }
});

router.get('/:prefix', async function (req, res, next) {
	try {
	const prefix = req.params.prefix;
	const customers = await customerService.getAll(prefix);
	if (!customers[0]) {
		res.status(404).render('notFound', { title: 'Customers' });
		return;
	}
	res.render('customers', { customers: customers, title: 'Customers' });
} catch (err) {
    console.error(err);
    res.status(500).json({ result: "Fail", error: "Error getting cutomers" })
  }
});


module.exports = router;

