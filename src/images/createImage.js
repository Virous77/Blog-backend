import express from "express";
import { createImageLink } from "../controllers/image.js";

const router = express.Router();

router.get("/", createImageLink);

export default router;
