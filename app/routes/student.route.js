import express from "express";
import StudentController from "../controllers/student.controller.js";

const router = express.Router();

router.route('/admin/student')
    .post(StudentController.create)

router.route('/admin/student/:id')
    .put(StudentController.update)
    .get(StudentController.getStudentById)
    .delete(StudentController.delete);

router.route('/admin/students')
    .get(StudentController.getAllStudents)

export default router;