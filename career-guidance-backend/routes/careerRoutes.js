// routes/careerRoutes.js
import express from "express";
import { getCareerSuggestions } from "../controllers/careerController.js";

const router = express.Router();

router.post("/suggestions", getCareerSuggestions);

export default router;
