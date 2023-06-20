import { Router } from "express";

import { userLogin } from "../controllers/auth/login.controller";
import { userRegistration } from "../controllers/auth/register.controller";
import { authLimiter } from "../middlewares";

const router = Router();

router.post('/login', authLimiter , userLogin)

router.post('/register', authLimiter , userRegistration)

export default router;