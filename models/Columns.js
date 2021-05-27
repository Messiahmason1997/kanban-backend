const mongoose = require('mongoose');

const ColumnsSchema = new mongoose.Schema({
	title: String,
	card: [String],
	input: String,
});

const Columns = mongoose.model('columns', ColumnsSchema);

module.exports = Columns;
