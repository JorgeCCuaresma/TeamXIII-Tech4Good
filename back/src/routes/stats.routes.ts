import { Router } from "express";
const router = Router();

import { getStats } from "../controllers/neigborhood/getAllStats.controller";
router.get("/all", getStats);
export default router;