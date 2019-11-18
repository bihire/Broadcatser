import express from 'express'
import redFlagController from '../controllers/redFlagController'
import authanticationJWT from "../middlewares/authJWT"
import createRedFlagValidator from "../middlewares/redFlagValidation/createRedFlagValidator"


const router = express.Router();
router.post("/", authanticationJWT,createRedFlagValidator,redFlagController.create)

export default router;
