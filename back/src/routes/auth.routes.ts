import { Router } from "express";

import { userLogin } from "../controllers/auth/login.controller";
import { userRegistration } from "../controllers/auth/register.controller";
import { authLimiter, validNeighborhoods, requiredFields } from "../middlewares";


const router = Router();

router.post('/login', authLimiter ,  userLogin)

router.post('/register', authLimiter , requiredFields, validNeighborhoods , userRegistration)

export default router;