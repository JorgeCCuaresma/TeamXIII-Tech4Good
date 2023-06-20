import { Router } from "express";
import { updateUser } from "../controllers/users/updateUser";


const router = Router();

router.post('/update/:id', updateUser)

export default router;
