import { Router } from "express";

import UserService from "./user.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const userRouter = Router();
const userColumns = ["id"];

// [GET] /api/users/:user_id
userRouter.get(
  "/:user_id",
  asyncHandler(async (req, res) => {
    const { user_id } = req.params;

    const user = await UserService._getUser(user_id);

    res.status(200).json({ status: "success", user });
  })
);

// [GET] /api/users
userRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await UserService._queryUsers();

    res.status(200).json({ status: "success", users });
  })
);

// [POST] /api/users
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, userColumns);

    const user = await UserService._createUser(createBody);

    res.status(200).json({ status: "success", user });
  })
);

// [PUT] /api/users/:user_id
userRouter.put(
  "/:user_id",
  asyncHandler(async (req, res) => {
    const { user_id } = req.params;
    const updateBody = pick(req.body, userColumns);

    const user = await UserService._updateUser(user_id, updateBody);

    res.status(200).json({ status: "success", user });
  })
);

// [DELETE] /api/users/:user_id
userRouter.delete(
  "/:user_id",
  asyncHandler(async (req, res) => {
    const { user_id } = req.params;

    await UserService._deleteUser(user_id);

    res.status(200).json({ status: "success", user: null });
  })
);

export default userRouter;
