import express from "express";
import {
  createBlog,
  getSingleBlog,
  getBlogCreatePage,
  deleteBlog,
  editBlog,
  doneEditBlog,
} from "../controllers/index.js";

const router = express.Router();

router.get("/new", getBlogCreatePage);
router.get("/:slug", getSingleBlog);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);
router.get("/edit/:id", editBlog);
router.put("/done/:id", doneEditBlog);

export default router;
