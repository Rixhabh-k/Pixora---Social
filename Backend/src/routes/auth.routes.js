const express = require("express");
const authController = require("../controllers/auth.controller")
const verifyUser = require("../middlewares/auth.middleware")
const authRouter = express.Router();

//user register API
authRouter.post("/register",authController.registerController);

//user login api
authRouter.post("/login",authController.loginController);

//get user 
authRouter.get("/get-me",verifyUser,authController.getMeController);

module.exports = authRouter;