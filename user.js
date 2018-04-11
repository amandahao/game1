var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	member: {type: String, unique: true}
	, leader: {type: String, unique: true}
	, choice: {type: String, unique: true}
	, password: {type: String}
	, verifyPassword: {type: String}
}));

exports.getModel = function() {
	return model;
}
