require('dotenv').config()
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");


mongoose.Schema.Types.Boolean.convertToFalse.add("");
mongoose.connect("mongodb://localhost/api",{
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => consola.error(error));
db.once("open", ()=> console.log('Connected to database'));

app.use(bodyParser.json());
app.use(express.json());

const serviceRoutes = require("./routes/service");
const blogRoutes = require("./routes/blog");
const keisRoutes = require("./routes/keis");
const themeRoutes = require("./routes/theme");
const authRoutes = require("./routes/auth");

app.use("/api/service", serviceRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/keis", keisRoutes);
app.use("/api/theme", themeRoutes);
app.use("/api/auth", authRoutes);


app.post("/", async (req, res) => {
	name = req.body.name;
	email = req.body.email;
	company = req.body.company;
	url = req.headers.referer;
	sendMail(name, email, company, url);
	await res.status(201).json("Сообщение отправлено");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const sendMail = async (name, email, company, url) =>{
	let transporter = await nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "razzylom123@yandex.ru", // generated ethereal user
      pass: "boxinglom123", // generated ethereal password
    },
  });

	transporter.sendMail({
    from: "razzylom123@yandex.ru", // sender address
    to: "razzylom123@yandex.ru", // list of receivers
    subject: "Сообщение с сайта", // Subject line
		 html: 
		 	`<h1>${name}</h1>` +
			`<h3>${email}</h3>` +
			`<h6>${company}</h6>`
  });
};


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
	app.use(function(err, req, res, next){
		console.log('This is the invalid field', err.field);
		next(err)
	})
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
