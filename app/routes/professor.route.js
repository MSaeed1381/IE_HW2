import express from "express";
import ProfessorController from "../controllers/professor.controller.js";

export default (app) => {
    const router = express.Router();

    // Create a new professor
    router.post("/", ProfessorController.create);
    router.put("/:id", ProfessorController.update);
    router.delete("/:id", ProfessorController.delete);
    router.get("/", ProfessorController.getAllProfessors);
    router.get("/:id", ProfessorController.getProfessorById)

    app.use('/admin/Professor', router);
};