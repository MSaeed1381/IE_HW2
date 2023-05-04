import express from "express";
import StudentController from "../controllers/student.controller.js";
import authJWT from "../middlewares/authentication.js";

const router = express.Router();

router.route('/admin/student')
    .post([authJWT],StudentController.create)

router.route('/admin/student/:id')
    .put([authJWT], StudentController.update)
    .get([authJWT], StudentController.getStudentById)
    .delete([authJWT], StudentController.delete);

router.route('/admin/students')
    .get([authJWT], StudentController.getAllStudents)

export default router;