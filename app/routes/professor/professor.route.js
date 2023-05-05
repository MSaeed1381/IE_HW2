import express from "express";
import Auth from "../../middlewares/authentication.js";
import RoleHandler from "../../middlewares/role.handler.js";
import ProfessorController from "../../controllers/professor/professor.controller.js";
import CourseController from "../../controllers/professor/course.controller.js";

const router = express.Router();

router.route('/professor/:id')
    .put([Auth.isAuthenticated, RoleHandler.isProfessor], ProfessorController.update);

router.route('/courses')
    .get([Auth.isAuthenticated, RoleHandler.isProfessor], CourseController.getCourseById);

router.route('/courses')
    .get([Auth.isAuthenticated, RoleHandler.isProfessor], CourseController.getAllCourses);


export default router;