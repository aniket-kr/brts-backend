import mongoose from 'mongoose';
import { IEmployeeType, IEmployeeTypeModel } from './employeeType.interface.js';

const schema = new mongoose.Schema<IEmployeeType>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

const EmployeeType = mongoose.model<IEmployeeType, IEmployeeTypeModel>(
  'EmployeeType',
  schema
);
export default EmployeeType;
