const express=require("express");
const { registerUser, loginUser, searchUser } = require("../controllers/userController");
const router=express.Router();
const validateToken=require("../middleware/validateTokenHandler");
const { validateRegister, validateLogin, validateSearch } = require("../middleware/validateData");

router.post("/register", validateRegister, registerUser);

router.post("/login",validateLogin, loginUser);

router.get("/search", validateToken , validateSearch, searchUser);

module.exports=router;