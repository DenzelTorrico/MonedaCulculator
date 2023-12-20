const express = require('express');
const router = express.Router();
const userController = require("../controllers/UserController")

router.get("/",userController.show)
router.get("/mensaje",userController.response)
router.post("/login",userController.login)
module.exports =router