import express from "express";
import ProfessorController from "../controllers/professor.controller.js";

const router = express.Router();

router.route('/admin/Professor')
    .post(ProfessorController.create)

router.route('/admin/Professor/:id')
    .put(ProfessorController.update)
    .get(ProfessorController.getProfessorById)
    .delete(ProfessorController.delete);

router.route('/admin/Professors')
    .get(ProfessorController.getAllProfessors)

export default router;