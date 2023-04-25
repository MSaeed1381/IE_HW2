import express from "express";
import ProfessorController from "../controllers/professor.controller.js";

export default (app) => {
    const router = express.Router();

    // Create a new professor
    router.post("/", ProfessorController.create);
    router.put("/:id", ProfessorController.update);

    app.use('/admin/Professor', router);
};