import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  makeComment,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
/* grab all feeds when we at the home page */
router.get("/:top", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, makeComment);

export default router;
