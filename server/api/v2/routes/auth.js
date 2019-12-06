import express from "express";
import AuthanticationController from "../controllers/authanticationController";
import signupValidator from "../middlewares/authValidation/signupValidator";
import signinValidator from "../middlewares/authValidation/signinValidator";

const router = express.Router();
router.post("/signup", signupValidator, AuthanticationController.register);
router.post("/signin", signinValidator, AuthanticationController.login);

export default router;
