import express from 'express';
import * as employeeTypeController from '../../controllers/employeeType.controller.js';
const router = express.Router();
router
    .route('/')
    .get(employeeTypeController.getAll)
    .post(employeeTypeController.create);
router
    .route('/:id')
    .get(employeeTypeController.getById)
    .put(employeeTypeController.updateById);
// .delete(employeeTypeController.deleteById);
export default router;
