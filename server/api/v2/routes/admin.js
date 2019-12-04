import express from 'express'

import authanticationJWT from "../middlewares/authJWT"
import statusRedFlagValidator from "../middlewares/redFlagValidation/statusRedFlagValidator"
import adminController from "../controllers/adminController"


const router = express.Router();
router.patch("/:red_flag_id/status", authanticationJWT, statusRedFlagValidator, adminController.updateStatus)

export default router;