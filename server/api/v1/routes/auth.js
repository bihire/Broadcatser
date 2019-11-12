import express from 'express'
import AuthanticationController from '../controllers/authanticationController'
import signupValidator from "../middlewares/authValidation/signupValidator"

const router = express.Router();
router.post("/signup", signupValidator, AuthanticationController.register);

export default router;
