import express from "express";
import Auth from "../../middlewares/authentication.js";
import RoleHandler from "../../middlewares/role.handler.js";
import StudentController from "../../controllers/student/student.controller.js";
import CourseController from "../../controllers/student/course.controller.js";

const router = express.Router();

router
    .route("/student/:id")
    .put(
        [Auth.isAuthenticated, RoleHandler.isStudent],
        StudentController.update
    );


export default router;
