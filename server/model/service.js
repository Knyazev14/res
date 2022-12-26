const mongoose = require("mongoose");
const path = require('path');
const coverImageBasePath = 'uploads/service';

const serviceScheme = new mongoose.Schema ({
	h1: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	url: {
		type: String,
		unique: true,
		required: true
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	content: {
		type: String
	},
	coverImageName: {
		
	}
});

serviceScheme.virtual('coverImagePath').get(function(){
	if(this.coverImageName !=null){
		return path.join("/", coverImageBasePath, this.coverImageName);
	}
});

module.exports = mongoose.model("Service", serviceScheme);
module.exports.coverImageBasePath = coverImageBasePath;

