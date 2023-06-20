import { Router } from "express";
const router = Router();

import { getAllHoods } from "../controllers/neigborhood/getAllHoods.controller";
import { getAllDistricts } from "../controllers/neigborhood/getAllDistricts.controller";

router.get("/all-hoods", getAllHoods);
router.get("/all-districts", getAllDistricts);

export default router;