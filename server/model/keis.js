const mongoose = require("mongoose");
const path = require('path');
const coverImageBasePath = 'uploads/keis';

const keisScheme = new mongoose.Schema ({
	h1: {
		type: String,
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	url: {
		type: String,
		unique: true,
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	coverImageName: {
	}
});

keisScheme.virtual('coverImagePath').get(function(){
	if(this.coverImageName !=null){
		return path.join("/", coverImageBasePath, this.coverImageName);
	}
});

module.exports = mongoose.model("Keis", keisScheme);
module.exports.coverImageBasePath = coverImageBasePath;

