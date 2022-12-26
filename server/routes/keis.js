const express = require("express");
const router = express.Router();
const Keis = require("../model/keis");

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadPath = path.join("static", Keis.coverImageBasePath);
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
		const keises = await Keis.find()
		.select(" h1 introtext coverImageName url tag")
		.sort("-created_date")
		.lean()
		.exec();
			await res.json(keises);
	}catch(err){
		res.status(500).json({ message: err.message});
	}
});

router.get("/:url", getKeis, (req, res) => {
	res.json(res.keis);
});

router.get("/:url", getKeis, (req, res) => {
	res.keis.remove();
});



async function getKeis(req, res, next){
	let keis;
	try{
		keis = await Keis.findOne({url: req.params.url});
		if(keis == null){
			return res.status(404).json({message: "Нет такой страницы"});
		}
	}catch(err){
		return res.status(500).json({message: err.message});
	}
	res.keis = keis;
	next();
}

router.post("/", upload.single('file'), async(req, res, next)=>{
	const fileName = req.file !=null ? req.file : null;
	const keis = new	Keis({
		h1: req.body.h1,
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
		coverImageName: fileName,
	});
	try{
		const newKeis = keis.save();
		await res.status(201).json(newKeis);
	}catch(err){
		res.status(400).json({ message: err.message});
	}
})
router.post("/addFile", upload.single('file'), async(req, res, next)=>{
	const newfileNmae = req.file !=null ? req.file : null;
	try{
		await res.json(newfileNmae);
	}catch(err){
		res.status(400).json({ message: err.message});
	}
})



module.exports = router;