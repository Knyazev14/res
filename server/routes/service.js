const express = require("express");
const router = express.Router();
const Service = require("../model/service");

const multer = require('multer');
const path = require('path');
const fs = require('fs');


const uploadPath = path.join("static", Service.coverImageBasePath);
const imageMimeTypes = ["image/jpg", "image/png", "image/jpeg", "image/webp"];
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
		const services = await Service.find()
		.select(" h1 coverImageName.filename url ")
		.sort("-created_date")
		.lean()
		.exec();
			await res.json(services);
	}catch(err){
		res.status(500).json({ message: err.message});
	}
});

router.get("/:url", getService, (req, res) => {
	res.json(res.service);
});

router.get("/:url", getService, (req, res) => {
	res.service.remove();
});



async function getService(req, res, next){
	let service;
	try{
		service = await Service.findOne({url: req.params.url})
		if(service == null){
			return res.status(404).json({message: "Нет такой страницы"});
		}
	}catch(err){
		return res.status(500).json({message: err.message});
	}
	res.service = service;
	next();
}

router.post("/", upload.single('file'), async(req, res, next)=>{
	const fileName = req.file !=null ? req.file : null;
	const service = new	Service({
		h1: req.body.h1,
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
		content: req.body.content,
		coverImageName: fileName,
	});
	try{
		const newService = service.save();
		await res.status(201).json(newService);
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