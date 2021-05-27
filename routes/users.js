var express = require('express');
var router = express.Router();
const Columns = require('../models/Columns');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/fetch', (req, res, next) => {
	Columns.find({}, (err, data) => {
		console.log(err);
		const responseObject = {
			success: true,
			data: data,
			message: 'Successfully fetched kanban columns',
		};

		// console.log(responseObject);
		res.json(responseObject);
	});
});

// router.get('/fetch/single', (req, res) => {
// 	const { id } = req.query;
// 	console.log(id);

// 	Columns.find({}, (err, data) => {
// 		// console.log(err);
// 		console.log(data);
// 		res.json({
// 			success: true,
// 			data: data
// 		});
// 	});
// });

module.exports = router;
