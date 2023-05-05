import express from "express";
import CourseController from "../../controllers/manager/course.controller.js";
import Auth from "../../middlewares/authentication.js";
import RoleHandler from "../../middlewares/role.handler.js";

const router = express.Router();

router
    .route("/courses")
    .post(
        [Auth.isAuthenticated, RoleHandler.isManager],
        CourseController.create
    );

router
    .route("/courses/:id")
    .put([Auth.isAuthenticated, RoleHandler.isManager], CourseController.update)
    .get(
        [Auth.isAuthenticated, RoleHandler.isManager],
        CourseController.getCourseById
    )
    .delete(
        [Auth.isAuthenticated, RoleHandler.isManager],
        CourseController.delete
    );

router
    .route("/courses")
    .get(
        [Auth.isAuthenticated, RoleHandler.isManager],
        CourseController.getAllCourses
    );

export default router;
