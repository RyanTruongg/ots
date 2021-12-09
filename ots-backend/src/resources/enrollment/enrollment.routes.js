import { Router } from "express";

import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";
import EnrollmentService from "./enrollment.service.js";

const enrollmentRouter = Router();
const enrollmentColumns = ["student_id", "course_id", "voucher_code"];
const enrollmentUpdateColumns = ["average_quiz_score", "project_score"];

enrollmentRouter.get(
  "/student-in-course/:course_id",
  asyncHandler(async (req, res) => {
    const { course_id } = req.params;

    const students = await EnrollmentService._getAllStudentInCourse(course_id);

    res.status(200).json({ status: "success", students });
  })
);

enrollmentRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, enrollmentColumns);

    createBody.enrolled_at = new Date().toISOString();

    const post = await EnrollmentService._createEnrollment(createBody);

    res.status(200).json({ status: "success", post });
  })
);

enrollmentRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { student_id, course_id } = req.query;

    const enrollment = await EnrollmentService._getEnrollment(student_id, course_id);

    res.status(200).json({ status: "success", enrollment });
  })
);

enrollmentRouter.put(
  "/:enrollment_id",
  asyncHandler(async (req, res) => {
    const { enrollment_id } = req.params;
    const updateBody = pick(req.body, enrollmentUpdateColumns);

    const enrollment = await EnrollmentService._updateEnrollment(enrollment_id, updateBody);

    res.status(200).json({ status: "success", enrollment });
  })
);

enrollmentRouter.get(
  "/:student_id",
  asyncHandler(async (req, res) => {
    const { student_id } = req.params;

    const enrollments = await EnrollmentService._getEnrollmentByStudentId(student_id);

    res.status(200).json({ status: "success", enrollments });
  })
);

export default enrollmentRouter;
