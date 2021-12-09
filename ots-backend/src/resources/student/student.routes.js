import { Router } from "express";

import StudentService from "./student.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const studentRouter = Router();
const studentColumns = ["user_id", "balance"];

// [GET] /api/students/:student_id
studentRouter.get(
  "/:student_id",
  asyncHandler(async (req, res) => {
    const { student_id } = req.params;

    const student = await StudentService._getStudent(student_id);

    res.status(200).json({ status: "success", student });
  })
);

// [GET] /api/students
studentRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const students = await StudentService._queryStudents();

    res.status(200).json({ status: "success", students });
  })
);

// [POST] /api/students
studentRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, studentColumns);

    const student = await StudentService._createStudent(createBody);

    res.status(200).json({ status: "success", student });
  })
);

// [PUT] /api/students/:student_id
studentRouter.put(
  "/:student_id",
  asyncHandler(async (req, res) => {
    const { student_id } = req.params;
    const updateBody = pick(req.body, studentColumns);

    const student = await StudentService._updateStudent(student_id, updateBody);

    res.status(200).json({ status: "success", student });
  })
);

// [DELETE] /api/students/:student_id
studentRouter.delete(
  "/:student_id",
  asyncHandler(async (req, res) => {
    const { student_id } = req.params;

    await StudentService._deleteStudent(student_id);

    res.status(200).json({ status: "success", student: null });
  })
);

export default studentRouter;
