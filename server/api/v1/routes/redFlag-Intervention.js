import express from 'express'
import redFlagController from '../controllers/redFlagController'
import authanticationJWT from "../middlewares/authJWT"
import createRedFlagValidator from "../middlewares/redFlagValidation/createRedFlagValidator"
import locationRedFlagValidator from "../middlewares/redFlagValidation/locationRedFlagValidator"
import commentRedFlagValidator from "../middlewares/redFlagValidation/commentRedFlagValidator"


const router = express.Router();
router.post("/", authanticationJWT,createRedFlagValidator,redFlagController.create)
router.patch("/:red_flag_id/location", authanticationJWT, locationRedFlagValidator, redFlagController.updateLocation)
router.patch("/:red_flag_id/comment", authanticationJWT, commentRedFlagValidator, redFlagController.updateComment)
router.get("/:red_flag_id", authanticationJWT,  redFlagController.getOne)
router.get("/", authanticationJWT,  redFlagController.getAll)

export default router;
