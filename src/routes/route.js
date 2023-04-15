const { employee } = require("../controllers/emplyee")

const router= require("express").Router()

router.post('/register',employee)

module.exports=router