import commentRouter from "./resources/comment/comment.routes.js";
import courseRouter from "./resources/course/course.routes.js";
import postRouter from "./resources/post/post.routes.js";
import staffRouter from "./resources/staff/staff.routes.js";
import studentRouter from "./resources/student/student.routes.js";
import subjectRouter from "./resources/subject/subject.routes.js";
import transactionRouter from "./resources/transaction/transaction.routes.js";
import userRouter from "./resources/user/user.routes.js";
import voucherRouter from "./resources/voucher/voucher.routes.js";

import errorHandler from "./middlewares/error.middleware.js";
import enrollmentRouter from "./resources/enrollment/enrollment.routes.js";

const route = (app) => {
  app.use("/api/comments", commentRouter);
  app.use("/api/courses", courseRouter);
  app.use("/api/posts", postRouter);
  app.use("/api/staffs", staffRouter);
  app.use("/api/students", studentRouter);
  app.use("/api/subjects", subjectRouter);
  app.use("/api/transactions", transactionRouter);
  app.use("/api/users", userRouter);
  app.use("/api/vouchers", voucherRouter);
  app.use("/api/enrollments", enrollmentRouter);
  app.use(errorHandler);
};

export default route;
