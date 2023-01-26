const express = require("express");
const {registerValidations,loginValidations}= require("../validations/userValidations.js");

const {register,login} = require ("../controllers/usersController.js");

const router=express.Router();
router.post('/register',registerValidations, register);
router.post('/login',loginValidations, login);

module.exports = router;