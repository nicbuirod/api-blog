import express from "express";
import { createPost, getFullPost } from "../controllers/post.controller.js";

const router = express.Router();

//routes

//select all post with comment
router.get("/", getFullPost);

//create one post
router.post("/", createPost);

export default router;
