const mongoose = require("mongoose");
const path = require('path');
const coverImageBasePath = 'uploads/blog';



const blogScheme = new mongoose.Schema ({
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
		required: true
	},
	tag: {
		type: String,
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

blogScheme.virtual('coverImagePath').get(function(){
	if(this.coverImageName !=null){
		return path.join("/", coverImageBasePath, this.coverImageName);
	}
});

module.exports = mongoose.model("Blog", blogScheme);
module.exports.coverImageBasePath = coverImageBasePath;
