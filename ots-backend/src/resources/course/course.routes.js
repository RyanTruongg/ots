import { Router } from "express";

import CourseService from "./course.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const courseRouter = Router();
const courseColumns = [
  "name",
  "instructor_id",
  "start_date",
  "end_date",
  "status",
  "price",
  "max_student",
  "subject_id",
  "schedule",
];

// [GET] /api/courses/:course_id
courseRouter.get(
  "/:course_id",
  asyncHandler(async (req, res) => {
    const { course_id } = req.params;

    const course = await CourseService._getCourse(course_id);

    res.status(200).json({ status: "success", course });
  })
);

// [GET] /api/courses
courseRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { instructor_id } = req.query;

    if (instructor_id) {
      const courses = await CourseService._queryCoursesByInstructorId(instructor_id);

      return res.status(200).json({ status: "success", courses });
    }
    const courses = await CourseService._queryCourses();

    return res.status(200).json({ status: "success", courses });
  })
);

// [POST] /api/courses
courseRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, courseColumns);

    const course = await CourseService._createCourse(createBody);

    res.status(200).json({ status: "success", course });
  })
);

// [PUT] /api/courses/:course_id
courseRouter.put(
  "/:course_id",
  asyncHandler(async (req, res) => {
    const { course_id } = req.params;
    const updateBody = pick(req.body, courseColumns);

    const course = await CourseService._updateCourse(course_id, updateBody);

    res.status(200).json({ status: "success", course });
  })
);

// [DELETE] /api/courses/:course_id
courseRouter.delete(
  "/:course_id",
  asyncHandler(async (req, res) => {
    const { course_id } = req.params;

    await CourseService._deleteCourse(course_id);

    res.status(200).json({ status: "success", course: null });
  })
);

export default courseRouter;
