import express from "express";
import StudentController from "../controllers/manager.controller.js";

const router = express.Router();

router.route('/admin/manager')
    .post(StudentController.create)

router.route('/admin/manager/:id')
    .put(StudentController.update)
    .get(StudentController.getEducationManagerById)
    .delete(StudentController.delete);

router.route('/admin/managers')
    .get(StudentController.getAllEducationManagers)

export default router;