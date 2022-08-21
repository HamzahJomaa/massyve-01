const router = require("express").Router()
const AuthenticationController = require("../Controllers/Authentication")
const {authenticate} = require("../Middleware/Authentication");

router.get("/user",authenticate(), AuthenticationController.GetUser )
router.put("/signin", AuthenticationController.SignIn )
router.post("/signup", AuthenticationController.SignUp )


module.exports = router

