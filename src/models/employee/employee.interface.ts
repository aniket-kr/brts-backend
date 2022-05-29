import mongoose from 'mongoose';

export interface IEmployee {
  firstName: string;
  middleName?: string;
  lastName?: string;
  dateOfBirth: Date;
  type: mongoose.Types.ObjectId;
  manager?: mongoose.Types.ObjectId;
}

export interface IEmployeeMethods {
  fullName(includeMiddleName: boolean): string;
}

export type IEmployeeModel = mongoose.Model<IEmployee, {}, IEmployeeMethods>;
