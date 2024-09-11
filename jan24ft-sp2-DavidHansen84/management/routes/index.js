var express = require('express');
var router = express.Router();
var db = require("../models");
var ManagementService = require("../services/ManagementService");
var managementService = new ManagementService(db);

/* GET home page. */
router.get('/querya', async (req, res, next) => {
	try {
	let queryA = await managementService.getQueryA();
	res.render('querya', { query: queryA, title: 'QueryA' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryA" })
  }
});

router.get('/queryb', async (req, res, next) => {
	try {
	let queryB = await managementService.getQueryB();
	res.render('queryb', { query: queryB, title: 'QueryB' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryB" })
  }
});

router.get('/queryc', async (req, res, next) => {
	try {
	let queryC = await managementService.getQueryC();
	res.render('queryc', { query: queryC, title: 'QueryC' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryC" })
  }
});

router.get('/queryd', async (req, res, next) => {
	try {
	let queryD = await managementService.getQueryD();
	res.render('queryd', { query: queryD[0], title: 'QueryD' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryD" })
  }
});

router.get('/querye', async (req, res, next) => {
	try {
	let queryE = await managementService.getQueryE();
	res.render('querye', { query: queryE, title: 'QueryE' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryE" })
  }
});

router.get('/queryf', async (req, res, next) => {
	try {
	let queryF = await managementService.getQueryF();
	res.render('queryf', { query: queryF, title: 'QueryF' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryF" })
  }
});

router.get('/queryg', async (req, res, next) => {
	try {
	let queryG = await managementService.getQueryG();
	res.render('queryg', { query: queryG, title: 'QueryG' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryG" })
  }
});

router.get('/queryh', async (req, res, next) => {
	try {
	let queryH = await managementService.getQueryH();
	res.render('queryh', { query: queryH, title: 'QueryH' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting queryH" })
  }
});

router.get('/', async (req, res, next) => {
	try {
	let options = [
		{
			name: 'Query A',
			link: 'querya',
			description: 'Display the table results for Query A',
		},
		{
			name: 'Query B',
			link: 'queryb',
			description: 'Display the table results for Query B',
		},
		{
			name: 'Query C',
			link: 'queryc',
			description: 'Display the table results for Query C',
		},
		{
			name: 'Query D',
			link: 'queryd',
			description: 'Display the table results for Query D',
		},
		{
			name: 'Query E',
			link: 'querye',
			description: 'Display the table results for Query E',
		},
		{
			name: 'Query F',
			link: 'queryf',
			description: 'Query result for PowerBI visualization',
		},
		{
			name: 'Query G',
			link: 'queryg',
			description: 'Query result for PowerBI visualization',
		},
		{
			name: 'Query H',
			link: 'queryh',
			description: 'Query result for PowerBI visualization',
		},
	];

	res.render('index', { options: options, title: 'Management' });
} catch (err) {
	console.error(err);
	res.status(500).json({ result: "Fail", error: "Error getting page" })
  }
});

module.exports = router;

