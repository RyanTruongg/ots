import { Router } from "express";

import CommentService from "./comment.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const commentRouter = Router();
const commentColumns = ["user_id", "post_id", "content", "created_at"];

// [GET] /api/comments/:comment_id
commentRouter.get(
  "/:comment_id",
  asyncHandler(async (req, res) => {
    const { comment_id } = req.params;

    const comment = await CommentService._getComment(comment_id);

    res.status(200).json({ status: "success", comment });
  })
);

// [GET] /api/comments
commentRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await CommentService._queryComments();

    res.status(200).json({ status: "success", comments });
  })
);

// [POST] /api/comments
commentRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, commentColumns);

    const comment = await CommentService._createComment(createBody);

    res.status(200).json({ status: "success", comment });
  })
);

// [PUT] /api/comments/:comment_id
commentRouter.put(
  "/:comment_id",
  asyncHandler(async (req, res) => {
    const { comment_id } = req.params;
    const updateBody = pick(req.body, commentColumns);

    const comment = await CommentService._updateComment(comment_id, updateBody);

    res.status(200).json({ status: "success", comment });
  })
);

// [DELETE] /api/comments/:comment_id
commentRouter.delete(
  "/:comment_id",
  asyncHandler(async (req, res) => {
    const { comment_id } = req.params;

    await CommentService._deleteComment(comment_id);

    res.status(200).json({ status: "success", comment: null });
  })
);

export default commentRouter;
