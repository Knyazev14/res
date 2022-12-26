const express = require("express");
const router = express.Router();
const Blog = require("../model/blog");
const Service = require("../model/service");

router.get("/sitemap", async (req, res) => {
	try{
		console.log('Принято на сервере');
		const services = await Service.find()
		.select("url")
		.lean()
		services.forEach(element => {
			element.path = "/service/";
		});
		const blogs = await Blog.find()
		.select("url")
		.lean()
		blogs.forEach(element => {
			element.path = "/blog/";
		});
		const sitemap = services.concat(blogs);
		await res.json(sitemap)
	}catch(err){
		res.status(500).json({ message: err.message});
	}
});

module.exports = router;