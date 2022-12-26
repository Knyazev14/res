const express = require("express");
const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.use(
	expressJwt({
		secret: "secret",
		algorithms: ["HS256"],
	}).unless({
		path: "/api/auth/login"
	})
)

router.post("/login", async (req, res)=>{
	if(req.body.user === process.env.ADMIN_LOGIN && req.body.password === process.env.ADMIN_PASSWORD){
		jsonwebtoken.sign({ user: req.body.user }, 'secret', function(err, token) {
			res.json({token: token})
	});
	}else{
		await res.status(403).json({message: "Ошибка авторизации"})
	}

})

router.post("/logout", async(req, res)=>{
	await res.json('Выход')
})

router.get("/user", async (req, res) => {
	const token = jsonwebtoken.decode(req.headers.authorization.split(" ")[1]);
	res.json({user: token.user})
});


module.exports = router;