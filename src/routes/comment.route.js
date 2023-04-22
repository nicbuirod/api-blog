import express from "express";
import {
  createComment,
  commentList,
  commentId,
  commentUpdate,
  commentDelete,
} from "../controllers/comment.controller.js";

const router = express.Router();

//routes

//create one comment
router.post("/", createComment);
router.get("/", commentList);
router.get("/:id", commentId);
router.put("/:id", commentUpdate);
router.delete("/:id", commentDelete);

export default router;
