const express = require("express");
const router = express.Router();
const Blog = require("../model/blog");

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadPath = path.join("static", Blog.coverImageBasePath);
const imageMimeTypes = ["image/jpg", "image/png", "image/jpeg"];
let storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, uploadPath);
	},
	filename: function(req, file, cb){
		cb(null, Date.now() + file.originalname);
	}
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, callback) =>{
		callback(null,imageMimeTypes.includes(file.mimetype));
	}
});


router.get("/", async (req, res) => {
	try{
		const blogs = await Blog.find()
		.select(" h1 introtext coverImageName url tag")
		.sort("-created_date")
		.lean()
		.exec();
			await res.json(blogs);
		
	}catch(err){
		res.status(500).json({ message: err.message});
	}
});
router.get("/teory", async (req, res) => {
	try{
		const blogs = await Blog.find({tag: "teory"})
		.select(" h1 introtext coverImageName url tag ")
		.sort("-created_date")
		.lean()
		.exec();
			await res.json(blogs);
		
	}catch(err){
		res.status(500).json({ message: err.message});
	}
});
router.get("/practic", async (req, res) => {
	try{
		const blogs = await Blog.find({tag: "practic"})
		.select(" h1 introtext coverImageName url tag")
		.sort("-created_date")
		.lean()
		.exec();
			await res.json(blogs);
		
	}catch(err){
		res.status(500).json({ message: err.message});
	}
});

router.get("/:url", getBlog, (req, res) => {
	res.json(res.blog);
});

async function getBlog(req, res, next){
	let blog;
	try{
		blog = await Blog.findOne({url: req.params.url});
		if(blog == null){
			return res.status(404).json({message: "Нет такой страницы"});
		}
	}catch(err){
		return res.status(500).json({message: err.message});
	}
	res.blog = blog;
	next();
}

router.post("/", upload.single('file'), async(req, res, next)=>{
	const fileName = req.file !=null ? req.file : null;
	const blog = new Blog({
		h1: req.body.h1,
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
		tag: req.body.tag,
		content: req.body.content,
		coverImageName: fileName,
	});
	try{
		const newBlog = blog.save();
		await res.status(201).json(newBlog);
	}catch(err){
		res.status(400).json({ message: err.message});
	}
})
router.post("/addFile", upload.single('file'), async(req, res, next)=>{
	const newfileName = req.file !=null ? req.file : null;
	try{
		await res.json(newfileName);
	}catch(err){
		res.status(400).json({ message: err.message});
	}
})

module.exports = router;