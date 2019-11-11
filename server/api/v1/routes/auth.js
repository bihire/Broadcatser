import express from 'express'
// import AuthanticationController from '../controllers/authanticationController'
// import signupValidator from "../middlewares/authValidation/signupValidator"
// import signinValidator from "../middlewares/authValidation/signinValidator"

const router = express.Router();
router.get("/", (req, res)=> {
    res.send('initializing successful')
});
// router.post("/signin", signinValidator, AuthanticationController.login);

export default router;
