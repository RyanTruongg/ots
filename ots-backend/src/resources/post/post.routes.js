import { Router } from "express";

import PostService from "./post.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const postRouter = Router();
const postColumns = ["user_id", "course_id", "content", "created_at"];

// [GET] /api/posts/:post_id
postRouter.get(
  "/:post_id",
  asyncHandler(async (req, res) => {
    const { post_id } = req.params;

    const post = await PostService._getPost(post_id);

    res.status(200).json({ status: "success", post });
  })
);

// [GET] /api/posts
postRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await PostService._queryPosts();

    res.status(200).json({ status: "success", posts });
  })
);

// [POST] /api/posts
postRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, postColumns);

    const post = await PostService._createPost(createBody);

    res.status(200).json({ status: "success", post });
  })
);

// [PUT] /api/posts/:post_id
postRouter.put(
  "/:post_id",
  asyncHandler(async (req, res) => {
    const { post_id } = req.params;
    const updateBody = pick(req.body, postColumns);

    const post = await PostService._updatePost(post_id, updateBody);

    res.status(200).json({ status: "success", post });
  })
);

// [DELETE] /api/posts/:post_id
postRouter.delete(
  "/:post_id",
  asyncHandler(async (req, res) => {
    const { post_id } = req.params;

    await PostService._deletePost(post_id);

    res.status(200).json({ status: "success", post: null });
  })
);

export default postRouter;
