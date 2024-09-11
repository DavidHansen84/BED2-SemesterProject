var express = require('express');
var router = express.Router();
var db = require("../models");
var ProductService = require("../services/ProductService");
var productService = new ProductService(db);
const moment = require('moment');

/* GET home page. */
router.get('/', async function (req, res, next) {
	try {
	res.render('index', { title: 'Product' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting page" })
  }
});


router.get('/:id', async function (req, res, next) {
	try {
	const id = parseInt(req.params.id);
	if (isNaN(id)) {
		res.status(400).send("Id needs to be a number");
		return;
	}
	const product = await productService.getOne(id);
	console.log(product[0])
	if (!product[0]) {
		res.status(404).render('notFound', { title: 'Product' });
		return;
	}
	const category = await productService.getCategory(product[0].ProductCategoryID);
	const model = await productService.getModel(product[0].ProductModelID);

	const date = new Date(product[0].SellStartDate);
	console.log(date);
	const newDate = moment(date).format('DD/MM/YYYY');

	res.render('product', { product: product[0], category: category[0], model: model[0], date: newDate, title: 'Product' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting product" })
  }
});


module.exports = router;

