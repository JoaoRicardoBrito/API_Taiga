import { Router } from "express";
import { TaigaController } from "../controllers/taiga.controller";

const router = Router();

router.get("/projects", TaigaController.list);
router.post("/projects", TaigaController.create);

export default router;