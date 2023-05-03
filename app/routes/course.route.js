import express from "express";
import CourseController from "../controllers/course.controller.js";

const router = express.Router();

router.route('/course')
    .post(CourseController.create)

router.route('/course/:id')
    .put(CourseController.update)
    .get(CourseController.getCourseById)
    .delete(CourseController.delete);

router.route('/course')
    .get(CourseController.getAllCourses)

export default router;