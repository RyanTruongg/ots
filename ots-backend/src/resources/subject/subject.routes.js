import { Router } from "express";

import SubjectService from "./subject.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const subjectRouter = Router();
const subjectColumns = ["name", "description", "level", "img_src"];

// [GET] /api/subjects/:subject_id
subjectRouter.get(
  "/:subject_id",
  asyncHandler(async (req, res) => {
    const { subject_id } = req.params;

    const subject = await SubjectService._getSubject(subject_id);

    res.status(200).json({ status: "success", subject });
  })
);

// [GET] /api/subjects
subjectRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const subjects = await SubjectService._querySubjects();

    res.status(200).json({ status: "success", subjects });
  })
);

// [POST] /api/subjects
subjectRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, subjectColumns);

    const subject = await SubjectService._createSubject(createBody);

    res.status(200).json({ status: "success", subject });
  })
);

// [PUT] /api/subjects/:subject_id
subjectRouter.put(
  "/:subject_id",
  asyncHandler(async (req, res) => {
    const { subject_id } = req.params;
    const updateBody = pick(req.body, subjectColumns);

    const subject = await SubjectService._updateSubject(subject_id, updateBody);

    res.status(200).json({ status: "success", subject });
  })
);

// [DELETE] /api/subjects/:subject_id
subjectRouter.delete(
  "/:subject_id",
  asyncHandler(async (req, res) => {
    const { subject_id } = req.params;

    await SubjectService._deleteSubject(subject_id);

    res.status(200).json({ status: "success", subject: null });
  })
);

export default subjectRouter;
