import { Router } from "express";

import StaffService from "./staff.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const staffRouter = Router();
const userColumns = ["full_name", "email", "password", "role", "disabled"];
const staffColumns = ["user_id", "phone", "bank_name", "bank_account_number"];

// [GET] /api/staffs/:staff_id
staffRouter.get(
  "/:staff_id",
  asyncHandler(async (req, res) => {
    const { staff_id } = req.params;

    const staff = await StaffService._getStaff(staff_id);

    res.status(200).json({ status: "success", staff });
  })
);

// [GET] /api/staffs
staffRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { role } = req.query;

    if (role) {
      const staffs = await StaffService._queryStaffsByRole(role);
      return res.status(200).json({ status: "success", staffs });
    }
    const staffs = await StaffService._queryStaffs();
    return res.status(200).json({ status: "success", staffs });
  })
);

// [POST] /api/staffs
staffRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const userBody = pick(req.body, userColumns);

    const staffBody = pick(req.body, staffColumns);

    const staff = await StaffService._createStaff(userBody, staffBody);

    res.status(200).json({ status: "success", staff });
  })
);

// [PUT] /api/staffs/:staff_id
staffRouter.put(
  "/:staff_id",
  asyncHandler(async (req, res) => {
    const { staff_id } = req.params;
    const userBody = pick(req.body, userColumns);

    const staffBody = pick(req.body, staffColumns);

    const staff = await StaffService._updateStaff(staff_id, staffBody, userBody);

    res.status(200).json({ status: "success", staff });
  })
);

// [DELETE] /api/staffs/:staff_id
staffRouter.delete(
  "/:staff_id",
  asyncHandler(async (req, res) => {
    const { staff_id } = req.params;

    await StaffService._deleteStaff(staff_id);

    res.status(200).json({ status: "success", staff: null });
  })
);

export default staffRouter;
