import { Router } from "express";
import { searchProduct } from "../controllers/user/product.controller.js";

const router = Router();

router.get("/search", searchProduct);

export default router;
