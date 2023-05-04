import express from "express";
import RoleController from "../controllers/role.controller.js";

const router = express.Router();

router.route('/admin/role')
    .post(RoleController.create)

router.route('/admin/role/:id')
    .put(RoleController.update)
    .get(RoleController.getRoleById)
    .delete(RoleController.delete);

router.route('/admin/roles')
    .get(RoleController.getAllRoles)

export default router;