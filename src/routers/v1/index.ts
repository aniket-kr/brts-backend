import express from 'express';
import employeeRouter from './employee.router.js';
import employeeTypeRouter from './employeeType.router.js';

const router = express.Router();

router.use('/employees', employeeRouter);
router.use('/employee-types', employeeTypeRouter);

export default router;
