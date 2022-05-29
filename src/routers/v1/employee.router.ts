import express from 'express';
import * as employeeController from '../../controllers/employee.controller.js';

const router = express.Router();

router
  .route('/')
  .get(employeeController.getAll)
  .post(employeeController.create);

router
  .route('/:id')
  .get(employeeController.getById)
  .put(employeeController.updateById)
  .delete(employeeController.deleteById);

export default router;
