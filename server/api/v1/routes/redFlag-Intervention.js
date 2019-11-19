import express from 'express'
import redFlagController from '../controllers/redFlagController'
import authanticationJWT from "../middlewares/authJWT"
import createRedFlagValidator from "../middlewares/redFlagValidation/createRedFlagValidator"
import locationRedFlagValidator from "../middlewares/redFlagValidation/locationRedFlagValidator"


const router = express.Router();
router.post("/", authanticationJWT,createRedFlagValidator,redFlagController.create)
router.patch("/:red_flag_id/location", authanticationJWT, locationRedFlagValidator, redFlagController.updateLocation)

export default router;
