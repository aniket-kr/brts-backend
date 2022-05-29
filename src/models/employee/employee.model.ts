import mongoose from 'mongoose';
import {
  IEmployee,
  IEmployeeMethods,
  IEmployeeModel,
} from './employee.interface.js';

const schema = new mongoose.Schema<IEmployee, IEmployeeModel, IEmployeeMethods>(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30,
      trim: true,
    },

    middleName: {
      type: String,
      default: '',
      maxlength: 30,
      trim: true,
    },

    lastName: {
      type: String,
      default: '',
      maxlength: 30,
      trim: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EmployeeType',
      required: true,
    },

    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
  }
);

schema.method('fullName', function (includeMiddleName = false) {
  let full = this.firstName;
  if (includeMiddleName && this.middleName) {
    full += ` ${this.middleName}`;
  }
  if (this.lastName) {
    full += ` ${this.lastName}`;
  }
  return full;
});

const Employee = mongoose.model<IEmployee, IEmployeeModel>('Employee', schema);
export default Employee;
